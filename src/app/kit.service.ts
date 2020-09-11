 import { Injectable } from '@angular/core';

@Injectable()
export class KitService {

  constructor() { }


  kits: {
    [key:string]: {
      [key:string]:{
        [key:string]: Instrument | Drums | NoteMap
      }
    }
  } = {
    "Default": {
      "Standard": {
        "NoteMap": {
          35: 36
        },
        "Drums": {
          
            'Shaker': { number: [82] },
            'Splash 2': { number: [59]  },
            'Crash Cymbal 2': { number: [57] },
            'Cowbell': { number: [56] },
            'Splash 1': { number: [55] },
            'Tambourine': { number: [54] },
            'Ride C. Bell': { number: [53] },
            'Ride Cymbal': { number: [51] },
            'Tom 1': { number: [50] },
            'Crash Cymbal 1': { number: [49] },
            'Tom 2': { number: [48] },
            'Hi-Hat Open': { number: [46] },
            'Tom 3': { number: [45] },
            'Foot Hi-Hat': { number: [44] },
            'Tom 4': { number: [43] },
            'Hi-Hats Closed': { number: [42] },
            'Handclaps': { number: [39] },
            'New Snare': { number: [38] },
            'Cross Stick': { number: [37] },
            'Kick Drum': { number: [36] },
            'Metronome': { number: [33] },
            'Snare': { number: [1] },
          
        }
      }
    },
      "User": {
        "Standard P Bass": {
          "Bass": {
            startNumber: 87, endNumber: 115, middleC4: 120
          },
          "Drums": {
            'Bell': { number: [81] },
            'Low Block': { number: [77] },
            'Jam Block': { number: [76] },
            'Clave': { number: [75] },
            'Long Guiro': { number: [74] },
            'Short Guiro': { number: [73] },
            'Shaker': { number: [70] },
            'Cabasa': { number: [69] },
            'Lo Agogo': { number: [68] },
            'Hi Agogo': { number: [67] },
            'Timbale Low': { number: [66] },
            'Timbale High': { number: [65] },
            'Low Conga': { number: [64] },
            'Open High Conga': { number: [63] },
            'Low Bongo': { number: [61] },
            'Hi Bongo': { number: [60] },
            'Splash 2': { number: [59] },
            'Crash 2': { number: [57] },
            'Cowbell': { number: [56] },
            'Splash 1': { number: [55] },
            'Tambourine': { number: [54] },
            'Ride Bell': { number: [53] },
            'China': { number: [52] },
            'Ride': { number: [51] },
            'Tom 1': { number: [50] },
            'Crash 1': { number: [49] },
            'Tom 2': { number: [48] },
            'Hi-Hat Open': { number: [46] },
            'Tom 3': { number: [45] },
            'Foot Hi-Hat': { number: [44] },
            'Tom 4': { number: [43] },
            'Hi-Hats Closed': { number: [42] },
            'Snare Alt': { number: [40] },
            'Handclaps': { number: [39] },
            'Snare': { number: [38] },
            '37 Cross Sticks': { number: [37] },
            'Kick': { number: [36] },
            'Kick alt': { number: [35] },
            'Metronome': { number: [33] },
          }
        }
      }
  }
  

}

export interface NoteMap {
  [key:number]: number;
}

export interface Drums {
  [key:string]: Drum
}

export interface Drum {
  number: number[];
}

export interface Instrument {
  startNumber: number;
  endNumber?: number;
  middleC4?: number;
}

