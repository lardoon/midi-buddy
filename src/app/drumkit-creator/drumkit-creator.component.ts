import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-drumkit-creator",
  templateUrl: "./drumkit-creator.component.html",
  styleUrls: ["./drumkit-creator.component.css"]
})
export class DrumkitCreatorComponent implements OnInit {
  instruments: DrumkitInstrument[] = [];

  instrumentOptions = [
    "Piano",
    "Chromatic Percussion",
    "Organ",
    "Guitar",
    "Bass",
    "Strings",
    "Ensemble",
    "Brass",
    "Reed",
    "Pipe",
    "Synth Lead",
    "Synth Pad",
    "Synth Effects",
    "Ethnic",
    "Percussive",
    "Sound Effects"
  ];

  constructor() {
    this.instrumentOptions.sort();
    this.instrumentOptions.unshift('Drums');
  }

  ngOnInit() {}

  addRow() {
    this.instruments.push({
      name: `${this.instrumentOptions[this.instruments.length % this.instrumentOptions.length]} ${this.instruments.length + 1}`,
      startNumber: 0,
      endNumber: 127,
      middleC4Number: 56
    });
  }

  remove(index) {
    this.instruments.splice(index, 1);
  }
}

export interface DrumkitInstrument {
  name: string;
  startNumber: number;
  endNumber: number;
  middleC4Number: number;
}
