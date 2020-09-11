 import { Injectable } from '@angular/core';

@Injectable()
export class KitService {

  constructor() { }


  kits: {
    [key:string]: {
      [key:string]:{
        Map?: NoteMap,
        Drums: Drums,
        Bass?: Instrument,
        Organ?: Instrument,
        Piano?: Instrument,
        Strings?: Instrument,
        Synth?: Instrument
      }
    }
  } = {
    "Default": {
      "Standard": {
        "Map": {
          35: 36
        },
        "Drums": {
          
            82: 'Shaker',
            59: 'Splash 2',
            57: 'Crash Cymbal 2',
            56: 'Cowbell',
            55: 'Splash 1',
            54: 'Tambourine',
            53: 'Ride C. Bell',
            51: 'Ride Cymbal',
            50: 'Tom 1',
            49: 'Crash Cymbal 1',
            48: 'Tom 2',
            46: 'Hi-Hat Open',
            45: 'Tom 3',
            44: 'Foot Hi-Hat',
            43: 'Tom 4',
            42: 'Hi-Hats Closed',
            39: 'Handclaps',
            38: 'New Snare',
            37: 'Cross Stick',
            36: 'Kick Drum',
            33: 'Metronome',
            1: 'Snare',
          
        }
      }
    },
      "User": {
        "Standard P Bass": {
          "Bass": {
            start: 87, end: 115, middleC4: 120
          },
          "Drums": {
            81: 'Bell',
            77: 'Low Block',
            76: 'Jam Block',
            75: 'Clave',
            74: 'Long Guiro',
            73: 'Short Guiro',
            70: 'Shaker',
            69: 'Cabasa',
            68: 'Lo Agogo',
            67: 'Hi Agogo',
            66: 'Timbale Low',
            65: 'Timbale High',
            64: 'Low Conga',
            63: 'Open High Conga',
            61: 'Low Bongo',
            60: 'Hi Bongo',
            59: 'Splash 2',
            57: 'Crash 2',
            56: 'Cowbell',
            55: 'Splash 1',
            54: 'Tambourine',
            53: 'Ride Bell',
            52: 'China',
            51: 'Ride',
            50: 'Tom 1',
            49: 'Crash 1',
            48: 'Tom 2',
            46: 'Hi-Hat Open',
            45: 'Tom 3',
            44: 'Foot Hi-Hat',
            43: 'Tom 4',
            42: 'Hi-Hats Closed',
            40: 'Snare Alt',
            39: 'Handclaps',
            38: 'Snare',
            37: '37 Cross Sticks',
            36: 'Kick',
            35: 'Kick alt',
            33: 'Metronome',
          }
        }
      }
  }
  

}

export interface NoteMap {
  [key:number]: number;
}

export interface Drums {
  [key:number]: string
}


export interface Instrument {
  start: number;
  end?: number;
  middleC4?: number;
}

