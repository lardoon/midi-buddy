import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTable } from "@angular/material/table";
import { FormControl } from "@angular/forms";
import { startWith, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-drumkit-creator",
  templateUrl: "./drumkit-creator.component.html",
  styleUrls: ["./drumkit-creator.component.css"]
})
export class DrumkitCreatorComponent implements OnInit {
  instrumentControls: FormControl[] = [];
  instruments: DrumkitInstrument[] = [];
  presetSelection: DrumkitInstrument[] = [];

  instrumentOptions = {
    Piano: [
      "Piano",
      "Bright Acoustic Piano",
      "Electric Grand Piano",
      "Honky-tonk Piano",
      "Electric Piano 1",
      "Electric Piano 2",
      "Harpsichord",
      "Clavi"
    ],
    "Chromatic Percussion": [
      "Chromatic Percussion",
      "Celesta",
      "Glockenspiel",
      "Music Box",
      "Vibraphone",
      "Marimba",
      "Xylophone",
      "Tubular Bells",
      "Dulcimer"
    ],
    Organ: [
      "Organ",
      "Drawbar Organ",
      "Percussive Organ",
      "Rock Organ",
      "Church Organ",
      "Reed Organ",
      "Accordion",
      "Harmonica",
      "Tango Accordion"
    ],
    Guitar: [
      "Acoustic Guitar (nylon)",
      "Acoustic Guitar (steel)",
      "Electric Guitar (jazz)",
      "Electric Guitar (clean)",
      "Electric Guitar (muted)",
      "Overdriven Guitar",
      "Distortion Guitar",
      "Guitar harmonics"
    ],
    Bass: [
      "Bass",
      "Acoustic Bass",
      "Electric Bass (finger)",
      "Electric Bass (pick)",
      "Fretless Bass",
      "Slap Bass 1",
      "Slap Bass 2",
      "Synth Bass 1",
      "Synth Bass 2"
    ],
    Strings: [
      "Strings",
      "Violin",
      "Viola",
      "Cello",
      "Contrabass",
      "Tremolo Strings",
      "Pizzicato Strings",
      "Orchestral Harp",
      "Timpani"
    ],
    Ensemble: [
      "String Ensemble 1",
      "String Ensemble 2",
      "SynthStrings 1",
      "SynthStrings 2",
      "Choir Aahs",
      "Voice Oohs",
      "Synth Voice",
      "Orchestra Hit"
    ],
    Brass: [
      "Brass",
      "Trumpet",
      "Trombone",
      "Tuba",
      "Muted Trumpet",
      "French Horn",
      "Brass Section",
      "SynthBrass 1",
      "SynthBrass 2"
    ],
    Reed: [
      "Reed",
      "Soprano Sax",
      "Alto Sax",
      "Tenor Sax",
      "Baritone Sax",
      "Oboe",
      "English Horn",
      "Bassoon",
      "Clarinet"
    ],
    Pipe: [
      "Pipe",
      "Piccolo",
      "Flute",
      "Recorder",
      "Pan Flute",
      "Blown Bottle",
      "Shakuhachi",
      "Whistle",
      "Ocarina"
    ],
    "Synth Lead": [
      "Synth",
      "Lead 1 (square)",
      "Lead 2 (sawtooth)",
      "Lead 3 (calliope)",
      "Lead 4 (chiff)",
      "Lead 5 (charang)",
      "Lead 6 (voice)",
      "Lead 7 (fifths)",
      "Lead 8 (bass + lead)",
      "Pad 1 (new age)",
      "Pad 2 (warm)",
      "Pad 3 (polysynth)",
      "Pad 4 (choir)",
      "Pad 5 (bowed)",
      "Pad 6 (metallic)",
      "Pad 7 (halo)",
      "Pad 8 (sweep)"
    ],
    "Synth Effects": [
      "Synth Effects",
      "FX 1 (rain)",
      "FX 2 (soundtrack)",
      "FX 3 (crystal)",
      "FX 4 (atmosphere)",
      "FX 5 (brightness)",
      "FX 6 (goblins)",
      "FX 7 (echoes)",
      "FX 8 (sci-fi)"
    ],
    Ethnic: [
      "Sitar",
      "Banjo",
      "Shamisen",
      "Koto",
      "Kalimba",
      "Bag pipe",
      "Fiddle",
      "Shanai"
    ],
    Percussive: [
      "Percussion",
      "Tinkle Bell",
      "Agogo",
      "Steel Drums",
      "Woodblock",
      "Taiko Drum",
      "Melodic Tom",
      "Synth Drum",
      "Reverse Cymbal"
    ],
    "Sound Effects": [
      "Sound Effects",
      "Guitar Fret Noise",
      "Breath Noise",
      "Seashore",
      "Bird Tweet",
      "Telephone Ring",
      "Helicopter",
      "Applause",
      "Gunshot"
    ]
  };

  displayedColumns = [
    "name",
    "startNumber",
    "endNumber",
    "middleC4Number",
    "controls"
  ];

  presets: { [key: string]: { [key:string]:DrumkitInstrument[] } } = {
    User: {"2082 Hammond with Bass 60+C0":[
      { name: 'Bass', startNumber: 0, endNumber: 31, middleC4Number: 36},
      {name:'Ride 2', startNumber: 59, percussion: true },
      {name:'Cabasa', startNumber: 58, percussion: true },
      {name:'Crash 2', startNumber: 57, percussion: true },
      {name:'Cowbell', startNumber: 56, percussion: true },
      {name:'Splash', startNumber: 55, percussion: true },
      {name:'Tambourine', startNumber: 54, percussion: true },
      {name:'Ride Bell', startNumber: 53, percussion: true },
      {name:'China', startNumber: 52, percussion: true },
      {name:'Ride', startNumber: 51, percussion: true },
      {name:'High Tom', startNumber: 50, percussion: true },
      {name:'Crash 1', startNumber: 49, percussion: true },
      {name:'High Mid tom', startNumber: 48, percussion: true },
      {name:'Low Mid-Tom', startNumber: 47, percussion: true },
      {name:'Open Hi-Hat', startNumber: 46, percussion: true },
      {name:'Low Tom', startNumber: 45, percussion: true },
      {name:'Pedal Hi-Hat', startNumber: 44, percussion: true },
      {name:'High Floor Tom', startNumber: 43, percussion: true },
      {name:'Closed Hi-Hats', startNumber: 42, percussion: true },
      {name:'Low Floor Tom', startNumber: 41, percussion: true },
      {name:'Brush Snare', startNumber: 40, percussion: true },
      {name:'808 Clap', startNumber: 39, percussion: true },
      {name:'Snare', startNumber: 38, percussion: true },
      {name:'Stick', startNumber: 37, percussion: true },
      {name:'Kick', startNumber: 36, percussion: true },
      {name:'808 Kick', startNumber: 35, percussion: true },
      {name:'Snare Roll', startNumber: 34, percussion: true },
      {name:'Claves', startNumber: 33, percussion: true },
      { name: 'Hammond', startNumber: 60, endNumber: 127, middleC4Number: 108},
    ]}
  };

  constructor() {
    this.instrumentOptions['Drums'] = ['Drums'];
  }

  ngOnInit() {
    
  }

  private addFormControl(value?) : FormControl {
    let control = new FormControl(value);
    this.instrumentControls.push(control);
    return control;
  }

  addRow() {
    let name = `Instrument ${this.instruments.length + 1}`;
    let control = this.addFormControl(name);
    this.instruments.push({
      name: name,
      startNumber: 0,
      endNumber: 127,
      middleC4Number: 60
    });
    this.table.renderRows();
  }

  addRowFromPreset(preset: DrumkitInstrument[]) {
    preset.sort((a, b) => {
      return a.startNumber - b.startNumber;
    })
    for(let instrument  of preset) {
      this.addFormControl(instrument.name);
      this.instruments.push(instrument);
    }
    this.table.renderRows();
  }

  remove(index) {
    this.instruments.splice(index, 1);
    this.instrumentControls.splice(index,1);
    this.table.renderRows();
    
  }

  @ViewChild(MatTable) table: MatTable<DrumkitInstrument>;
}

export interface DrumkitInstrument {
  name: string;
  startNumber: number;
  endNumber?: number;
  middleC4Number?: number;
  percussion?: boolean;
}

