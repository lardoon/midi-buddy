import { Component, ElementRef,  Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Midi } from '@tonejs/midi';

import * as mm from '@magenta/music/es6';
import * as vm from 'html-midi-player';

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent implements OnInit, AfterViewInit {

  noteSequence: mm.NoteSequence;

  @Input()
  visualiserType: string;

  @ViewChild('#midiPlayer')
  midiPlayer: ElementRef;
  

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    let player = this.midiPlayer;
  }

}