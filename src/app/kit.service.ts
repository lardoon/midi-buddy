import { Injectable } from "@angular/core";

@Injectable()
export class KitService {
  constructor() {}

  categories: { [key: string]: { [key: string]: string[] } } = {
    "General MIDI": {
      "General MIDI": ["Drums"]
    },
    Default: {
      Standard: ["Drums"]
    },
    User: {
      "Standard P Bass": ["Drums", "Bass"]
    }
  };

  kits: {
    [key: string]: {
      Map?: NoteMap;
      Drums: Drums;
      Bass?: Instrument;
      Organ?: Instrument;
      Piano?: Instrument;
      Strings?: Instrument;
      Synth?: Instrument;
    };
  } = {
    "General MIDI": {
      Drums: {
        87: "Open Surdo (GM2)",
        86: "Mute Surdo (GM2)",
        85: "Castanets (GM2)",
        84: "Belltree (GM2)",
        83: "Jingle Bell (GM2)",
        82: "Shaker (GM2)",
        81: "Open Triangle",
        80: "Mute Triangle",
        79: "Open Cuica",
        78: "Mute Cuica",
        77: "Low Wood Block",
        76: "High Wood Block",
        75: "Claves",
        74: "Long Guiro",
        73: "Short Guiro",
        72: "Long Whistle",
        71: "Short Whistle",
        70: "Maracas",
        69: "Cabasa",
        68: "Low Agogo",
        67: "High Agogo",
        66: "Low Timbale",
        65: "High Timbale",
        64: "Low Conga",
        63: "Open High Conga",
        62: "Mute High Conga",
        61: "Low Bongo",
        60: "High Bongo",
        59: "Ride Cymbal 2",
        58: "Vibra Slap",
        57: "Crash Cymbal 2",
        56: "Cowbell",
        55: "Splash Cymbal",
        54: "Tambourine",
        53: "Ride Bell",
        52: "Chinese Cymbal",
        51: "Ride Cymbal 1",
        50: "High Tom 1",
        49: "Crash Cymbal 1",
        48: "High Tom 2",
        47: "Mid Tom 1",
        46: "Open Hi-hat",
        45: "Mid Tom 2",
        44: "Pedal Hi-hat",
        43: "Low Tom 1",
        42: "Closed Hi-hat",
        41: "Low Tom 2",
        40: "Snare Drum 2",
        39: "Hand Clap",
        38: "Snare Drum 1",
        37: "Side Stick",
        36: "Bass Drum 1",
        35: "Bass Drum 2",
        34: "Metronome Bell (GM2)",
        33: "Metronome Click (GM2)",
        32: "Square Click (GM2)",
        31: "Sticks (GM2)",
        30: "Scratch Pull (GM2)",
        29: "Scratch Push (GM2)",
        28: "Slap (GM2)",
        27: "High Q (GM2)"
      }
    },
    Standard: {
      Map: {
        35: 36, // kick
        34: 33, // metronome
        32: 33, // metronome
        47: 45, // mid tom
        40: 38, // snare
        41: 43, // low tom
        52: 55  // china cymbal
      },
      Drums: {
        82: "Shaker",
        59: "Splash 2",
        57: "Crash Cymbal 2",
        56: "Cowbell",
        55: "Splash 1",
        54: "Tambourine",
        53: "Ride C. Bell",
        51: "Ride Cymbal",
        50: "Tom 1",
        49: "Crash Cymbal 1",
        48: "Tom 2",
        46: "Hi-Hat Open",
        45: "Tom 3",
        44: "Foot Hi-Hat",
        43: "Tom 4",
        42: "Hi-Hats Closed",
        39: "Handclaps",
        38: "New Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome",
        1: "Snare"
      }
    },

    "Standard P Bass": {
      "Map": {
        82: 70, // shaker
        34: 33, // metronome
        41: 43, // tow tom
        47: 45, // mid tom
        62: 63, // conga
      },
      Bass: {
        start: 87,
        end: 115,
        middleC4: 120
      },
      Drums: {
        81: "Bell",
        77: "Low Block",
        76: "Jam Block",
        75: "Clave",
        74: "Long Guiro",
        73: "Short Guiro",
        70: "Shaker",
        69: "Cabasa",
        68: "Lo Agogo",
        67: "Hi Agogo",
        66: "Timbale Low",
        65: "Timbale High",
        64: "Low Conga",
        63: "Open High Conga",
        61: "Low Bongo",
        60: "Hi Bongo",
        59: "Splash 2",
        57: "Crash 2",
        56: "Cowbell",
        55: "Splash 1",
        54: "Tambourine",
        53: "Ride Bell",
        52: "China",
        51: "Ride",
        50: "Tom 1",
        49: "Crash 1",
        48: "Tom 2",
        46: "Hi-Hat Open",
        45: "Tom 3",
        44: "Foot Hi-Hat",
        43: "Tom 4",
        42: "Hi-Hats Closed",
        40: "Snare Alt",
        39: "Handclaps",
        38: "Snare",
        37: "Cross Sticks",
        36: "Kick",
        35: "Kick alt",
        33: "Metronome"
      }
    }
  };
}

export interface NoteMap {
  [key: number]: number;
}

export interface Drums {
  [key: number]: string;
}

export interface Instrument {
  start: number;
  end?: number;
  middleC4?: number;
}