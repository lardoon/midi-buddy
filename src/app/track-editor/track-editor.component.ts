import { Component, OnInit } from '@angular/core';
import { Midi } from '@tonejs/midi';
import { FormControl } from '@angular/forms';
import { Note } from '@tonejs/midi/dist/Note';
import { Track } from '@tonejs/midi/dist/Track';

@Component({
  selector: 'app-track-editor',
  templateUrl: './track-editor.component.html',
  styleUrls: ['./track-editor.component.css']
})
export class TrackEditorComponent implements OnInit {

  displayColumns = ['name', 'channel', 'instrument', 'family', 'kitInstrument'];

  presets:{[key:string]: {[key:string]:string[]}} = {
    'Standard': {'Standard':['Drums'], 'Brushes':['Drums']},
    'Premium': {'Standard Pro':['Drums'], 'Studio Legend':['Drums']},
    'User': {'Rock with Bass':['Bass','Drums']},
    'Custom':{}
  }

  kitSelection: string[];
  instrumentSelection: FormControl[] = [];

  findInstrument(instrument: string) {
    let i = this.kitSelection.find((i) => (instrument || "").toLocaleLowerCase() === i.toLocaleLowerCase());
    console.log(i)
    return  i ;
  }

  presetInstrumentSelection() {
    for(let i = 0; i < this.midi.tracks.length; i++) {
        let track = this.midi.tracks[i];
        let instrument = this.findInstrument(track.instrument.family);
        if(instrument && !this.findInstrument(this.instrumentSelection[i].value))
          this.instrumentSelection[i].setValue(instrument);
      }
  }

  resetPresetInstruments() {
    for(let i = 0; i < this.midi.tracks.length; i++) {
        let track = this.midi.tracks[i];
        let instrument = this.findInstrument(track.instrument.family);
        if(instrument)
          this.instrumentSelection[i].setValue(instrument);
      }
  }

  clearPresetInstruments() {
    for(let i = 0; i < this.midi.tracks.length; i++) {
        this.instrumentSelection[i].setValue(null);
      }
  }

  export() {
    const MIDDLE_C4 = 56;
    const instrumentMiddleC4:{[key:string]:number} = {
      Bass: 36,
      Drums: 56
    };
    let exportMidi = new Midi();
    exportMidi.header = this.midi.header;
    let exportTrack = exportMidi.addTrack();
    exportTrack.channel = 9;
    for(let i = 0; i < this.midi.tracks.length; i++) {
      let track = this.midi.tracks[i];
      let instrument = this.instrumentSelection[i].value;
      if(instrument) {
        
        for(let note of track.notes) {
          exportTrack.addNote({
            midi: (note.midi - MIDDLE_C4) + instrumentMiddleC4[instrument],
            duration: note.duration,
            time: note.time
          });
        }
      }
    }
    let blob = new Blob([exportMidi.toArray()])
    const anchor = window.document.createElement('a');
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = "export.mid";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
  }

  constructor() { }

  ngOnInit() {
  }

    midi: Midi;
    fileName: string;
    
    async uploadFile(event) {
      let file = event.target.files[0];
      this.fileName = file.name;
      let midi = await this.loadFile(file);
      for(let i = 0; i < midi.tracks.length; i++) {
        this.instrumentSelection.push(new FormControl());
      }
      this.midi = midi;
    }

    loadFile(file : Blob) : Promise<Midi> {
      return new Promise((resolve, reject) => {
            const reader = new FileReader();    // load a midi file in the browser
            reader.onload = (e) =>  {
              resolve(new Midi(<ArrayBuffer> e.target.result));
            }
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        })
    }

}