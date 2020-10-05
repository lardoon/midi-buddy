import { Component, OnInit, Output } from '@angular/core';
import { Midi, Track } from '@tonejs/midi';
import { FormControl } from '@angular/forms';
import { KitService } from '../kit.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-track-editor',
  templateUrl: './track-editor.component.html',
  styleUrls: ['./track-editor.component.css'],
  animations: [
    trigger('trackExpanded', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TrackEditorComponent implements OnInit {

  // previewExpanded()  { return true };
  expandedTrack: Track;

  displayColumns = ['name', 'channel', 'instrument', 'family', 'kitInstrument'];

  presets:{[key:string]: {[key:string]:string[]}} = {  }

  @Output()
  kitSelection: string;
  
  @Output()
  instrumentSelection: FormControl[] = [];

  @Output()
  transpose: number = 0;

  @Output()
  moveDrums: boolean;

  @Output()
  moveNotes: boolean;

  @Output()
  remove0VelocityNotes: boolean;

  findInstrument(instrument: string) {
    let i = this.getKitInstruments().find((i) => (instrument || "").toLocaleLowerCase() === i.toLocaleLowerCase());
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



  constructor(private kitService: KitService) { 
    this.presets = kitService.categories;
  }

  getKitInstruments(): string[] {
    if(!this.kitSelection)
      return [];
    return Object.keys(this.kitService.kits[this.kitSelection]).filter(k => k !== 'Map');
  }

  ngOnInit() {
  }

    @Output()
    midi: Midi;
    fileName: string;
    
    async uploadFile(event) {
      let file = event.target.files[0];
      this.fileName = file.name;
      let midi = await this.loadFile(file);
      for(let i = 0; i < midi.tracks.length; i++) {
        this.instrumentSelection.push(new FormControl());
      }
      if(!midi.name) {
        midi.name = this.fileName.replace(/\.midi?$/i, '');
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