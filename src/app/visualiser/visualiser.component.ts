import { Component, ElementRef,  Input, OnInit, ViewChild,  } from '@angular/core';
import { Midi } from '@tonejs/midi';

import * as mm from '@magenta/music/es6';
import * as vm from 'html-midi-player';

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent implements OnInit {

  noteSequence: mm.NoteSequence;

  @Input()
  visualiserType: string;

  @ViewChild('#midiPlayer')
  midiPlayer: ElementRef;
  

  constructor() { }

  ngOnInit() {
    let player = this.midiPlayer;
  }

  ngOnViewInit() {

  }

}