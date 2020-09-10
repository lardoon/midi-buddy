import { Component, OnInit, Input } from '@angular/core';
import { Midi } from '@tonejs/midi';
import { Note } from '@tonejs/midi/dist/Note';
import { Track } from '@tonejs/midi/dist/Track';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  @Input()
  midi: Midi;
  @Input()
  instrumentSelection: FormControl[] = [];

  constructor() { }

  ngOnInit() {
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
    anchor.download = "export.mid";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
  }

  isDisabled() : boolean {
    return !this.midi || !this.instrumentSelection || this.instrumentSelection.filter(i => i.value != null).length == 0;
  }

}