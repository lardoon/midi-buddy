import { Injectable } from '@angular/core';

@Injectable()
export class KitService {

  constructor() { }


  kits: {[key:string]:{[key:string]:  KitInstrument
  }} = {
    "Standard": {
      "Drums": {
        startNumber: 1,
        endNumber: 82,
        notes: {
          'Shaker': { number: 82, type: 'shaker' },
          'Splash 2': { number: 59, type: 'splash', variant: 2 },
          'Crash Cymbal 2': { number: 57, type: 'crash', variant: 2 },
          'Cowbell': { number: 56, type: 'cowbell' },
          'Splash 1': { number: 55, type: 'splash', variant: 1 },
          'Tambourine': { number: 54, type: 'tambourine' },
          'Ride C. Bell': { number: 53, type: 'ride' },
          'Ride Cymbal': { number: 51, type: 'ride' },
          'Tom 1': { number: 50, type: 'tom', variant: 1 },
          'Crash Cymbal 1': { number: 49, type: 'crash', variant: 1 },
          'Tom 2': { number: 48, type: 'tom', variant: 2 },
          'Hi-Hat Open': { number: 46, type: 'hat' },
          'Tom 3': { number: 45, type: 'tom', variant: 3 },
          'Foot Hi-Hat': { number: 44, type: 'hat' },
          'Tom 4': { number: 43, type: 'tom', variant: 4 },
          'Hi-Hats Closed': { number: 42, type: 'hat' },
          'Handclaps': { number: 39, type: 'clap' },
          'New Snare': { number: 38, type: 'snare', variant: 1 },
          'Cross Stick': { number: 37, type: 'stick' },
          'Kick Drum': { number: 36, type: 'kick' },
          'Metronome': { number: 33, type: 'metronome' },
          'Snare': { number: 1, type: 'snare', variant: 2 },
        }
      }
    }
  }

}

export interface KitInstrument {
  startNumber: number;
  endNumber?: number;
  middleC4?: number;
  notes: { [key: string] : KitNote }
}

export interface KitNote {
  number: number;
  midiNumber?: number;
  type?: string;
  variant?: number;
}