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

  @Input()
  moveUnsupportedNotes: boolean;

  @Input()
  moveUnsupportedDrums: boolean;

  @Input()
  transpose: number;

  constructor(private kitService: KitService) { }

  ngOnInit() {
    
  }

  export() {
    let kit = this.kitService.kits[this.kitSelection];
    const MIDDLE_C4 = 56;
    const OCTAVE = 12;
    
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
          if(instrumentName === "Drums" && kit.Map && this.moveUnsupportedDrums) {
            if(midiNo in kit.Map) {
              midiNo = kit.Map[midiNo];
            }
          } else if(instrumentName !== "Drums") {
            let inst =  instrument as Instrument;
            midiNo = (inst.middleC4 - (MIDDLE_C4 - midiNo))  + this.transpose ;
            if(this.moveUnsupportedNotes && (midiNo > inst.start || midiNo < inst.end) && (inst.end - inst.start >= OCTAVE)) {
              let m = midiNo;
              while(m < inst.start) {
                m += OCTAVE;
              }
              while(m > inst.end) {
                m -= OCTAVE;
              }
              midiNo = m;
            }
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
    return `${this.midi.name || 'export'} (${this.instrumentSelection.filter(i => i.value).map(i => i.value).filter((x, i, a) => a.indexOf(x) == i).join('  ')}).mid`.replace(',',' ');
  }

  isDisabled() : boolean {
    return !this.midi || !this.instrumentSelection || this.instrumentSelection.filter(i => i.value != null).length == 0;
  }

}