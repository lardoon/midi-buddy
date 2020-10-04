import { Component, ElementRef,  Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Midi } from '@tonejs/midi';

import * as mm from '@magenta/music/es6';

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent implements OnInit, AfterViewInit {

  noteSequence: mm.NoteSequence;

  @Input()
  type: string = VisualiserType.SVG;



  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {

  }

}

class VisualiserType {
  static SVG = 'SVG';
  static Canvas = 'Canvas'
}