import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Midi } from '@tonejs/midi';

import * as mm from '@magenta/music/es6';

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent implements OnInit {

  @ViewChild('visualiserCanvas')
  visualiserCanvas: HTMLCanvasElement;

  visualiser: mm.Visualizer;

  private _midi: Midi;

  get midi() : Midi {
    return this._midi;
  }

  @Input()
  set midi(value: Midi) {
    this._midi = value;
    if(value) {
      this.visualise();
    }
  }

  visualise() {
    const sequence = mm.midiToSequenceProto(this.midi.toArray());
    this.visualiser =  new mm.Visualizer(sequence, this.visualiserCanvas);
  }

  constructor() { }

  ngOnInit() {
  }

}