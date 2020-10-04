import { Component, ElementRef,  Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Midi } from '@tonejs/midi';

import * as mm from '@magenta/music/es6';

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent implements OnInit, AfterViewInit {

  initialised: boolean = false;

  @ViewChild('svg')
  svgElement: ElementRef<SVGSVGElement>;

  @Input()
  type: string = VisualiserType.SVG;
  private _midi: Midi;

  @Input()
  set midi(value: Midi) {
    if(value !== this._midi)
      this._midi = value;
    if(value)
      this.visualise();
  }

  get midi() : Midi {
    return this._midi;
  }
  _trackIndex: number;
  @Input()
  set trackIndex(value: number) {
    if(this._trackIndex !== value) {
      this._trackIndex = value;
      this.visualise();
    }
  }
  get trackIndex(): number {
    return this._trackIndex;
  };

  visualise() {
    if(!this.initialised)
      return;
    let trackMidi = new Midi();
    trackMidi.header = this.midi.header;
    let newTrack = trackMidi.addTrack();
    let track = this.midi.tracks[this.trackIndex];
    newTrack.fromJSON(track.toJSON());
    let noteSequence = mm.midiToSequenceProto(trackMidi.toArray());
    if(!noteSequence.totalTime)
      return;
    let visualiser = new mm.PianoRollSVGVisualizer(noteSequence, this.svgElement.nativeElement);
  }

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.initialised = true;
    this.visualise();
  }

}

class VisualiserType {
  static SVG = 'SVG';
  static Canvas = 'Canvas'
}