import { Component, OnInit, Input } from '@angular/core';
import { Midi } from '@tonejs/midi';
import { Note } from '@tonejs/midi/dist/Note';
import { Track } from '@tonejs/midi/dist/Track';
import { FormControl } from '@angular/forms';
import { KitService, Drums, Instrument } from '../kit.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  private _midi: Midi
  @Input()
  set midi(value: Midi) {
    this._midi = value;
    this.fileName = this.createMidiFileName();
  }
  get midi(): Midi {
    return this._midi;
  }
  
  @Input()
  instrumentSelection: FormControl[] = [];

  @Input()
  kitSelection: string;

  fileName: string;

  constructor(private kitService: KitService) { }

  ngOnInit() {
    
  }

  export() {
    let kit = this.kitService.kits[this.kitSelection];
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
      let instrumentName = this.instrumentSelection[i].value as string;
      if(instrumentName) {
        let instrument = kit[instrumentName];
        for(let note of track.notes) {
          let midiNo = note.midi;
          if(instrument === "Drums" && kit.Map) {
            if(midiNo in kit.Map) {
              midiNo = kit.Map[midiNo];
            }
          } else {
            let inst = <Instrument> instrument;
            midiNo = (midiNo - MIDDLE_C4) + inst.middleC4;
          }
          exportTrack.addNote({
            midi: midiNo,
            duration: note.duration,
            time: note.time,
            velocity: note.velocity,
            noteOffVelocity: note.noteOffVelocity
          });
        }
      }
    }
    let blob = new Blob([exportMidi.toArray()])
    const anchor = window.document.createElement('a');
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = this.createMidiFileName();
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
  }

  createMidiFileName(): string {
    if(!this.midi)
      return null;
    return `${this.midi.name || 'export'} (${this.instrumentSelection.filter(i => i.value).map(i => i.value).filter((x, i, a) => a.indexOf(x) == i).join(', ')}).mid`;
  }

  isDisabled() : boolean {
    return !this.midi || !this.instrumentSelection || this.instrumentSelection.filter(i => i.value != null).length == 0;
  }

}