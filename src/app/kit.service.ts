import { Injectable } from "@angular/core";

@Injectable()
export class KitService {
  constructor() {}

  DEFAULT_MAP: NoteMap = {
    35: 36, // kick
    34: 33, // metronome
    32: 33, // metronome
    47: 45, // mid tom
    40: 38, // snare
    41: 43, // low tom
    52: 55 // china cymbal
  };

  categories: { [key: string]: { [key: string]: string[] } } = {
    "General MIDI": {
      "General MIDI": ["Drums"]
    },
    "Default V2": {
      "Brushes V2": ["Drums"],
      "Dance V2": ["Drums"],
      "Ethereal V2": ["Drums"],
      "Jazz V2": ["Drums"],
      "Latin V2": ["Drums"],
      "Metal V2": ["Drums"],
      "Percussion V2": ["Drums"],
      "Rock V2": ["Drums"],
      "Standard V2": ["Drums"],
      "Voice V2": ["Drums"]
    },
    Premium: {
      "Custom Retro": ["Drums"],
      "Flamenco Percussion": ["Drums"],
      "John Bonham Inspired": ["Drums"],
      Reggae: ["Drums"],
      "Standard Pro": ["Drums"],
      "Studio Legend": ["Drums"],
      "Vintage Ludwig": ["Drums"]
    },
    User: {
      "Rock with Bass": ["Drums", "Bass"],
      "Rock and Rick Bass 0-31": ["Drums", "Bass"],
      "Standard P Bass": ["Drums", "Bass"],
      "2082 Hammond with Bass 60+C0": ["Drums", "Bass", "Organ"],
      "Sub-Std Pro PL Bass 0-31": ["Drums", "Bass"],
      "Bosendorfer Jazz Trio 60+C1": ["Drums","Bass","Piano"]
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
    "Brushes V2": {
      Map: this.DEFAULT_MAP,
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
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Dance V2": {
      Map: this.DEFAULT_MAP,
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
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Ethereal V2": {
      Map: this.DEFAULT_MAP,
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
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Jazz V2": {
      Map: this.DEFAULT_MAP,
      Drums: {
        82: "Shaker",
        59: "Ride 2",
        57: "Crash Ride 2",
        55: "Cowbell",
        54: "Tambourine",
        53: "Ride C. Bell",
        52: "Ride 1 Bow Crash",
        51: "Ride Cymbal",
        50: "Tom 1",
        49: "Crash Cymbal 1",
        48: "Tom 2",
        47: "Hi-hat Foot Open",
        46: "Hi-hat Open",
        45: "Tom 3",
        44: "Foot Hi-Hat",
        43: "Tom 4",
        42: "Hi-Hats Closed",
        39: "Stick over stick on snare",
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Latin V2": {
      Map: {
        ...this.DEFAULT_MAP,
        77: 76 // Woodblock
      },
      Drums: {
        104: "Shekere Side to side",
        103: "Shekere Bass",
        102: "Shekere Down",
        101: "Shekere Up",
        91: "Timbales- cymbal ride",
        90: "Timbales- cymbal crash",
        89: "Timbales- cencero bell",
        88: "Timbales- Cha Cha bell",
        87: "Timbales- cascara L",
        86: "Timbales- cascara R",
        82: "Shaker",
        81: "Guira Long",
        80: "Guira Short",
        79: "Tumba Mute",
        78: "Tumba Open",
        76: "lam Block",
        75: "Clave",
        74: "Guiro Long",
        73: "Guiro- short",
        71: "Maracas R",
        70: "Maracas L",
        69: "Cabasa- long",
        68: "Cabasa- short",
        67: "Timbale Low Hand",
        66: "Timbale Low",
        65: "Timbale High",
        64: "Conga Open",
        63: "Quinto Mute",
        62: "Quinto Open",
        61: "Bongo Low",
        60: "Bongo High",
        59: "Splash 2",
        58: "Conga Mute",
        57: "Crash Cymbal 2",
        56: "Bongo Bell (Cowbell)",
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
        39: "Handclap",
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Metal V2": {
      Map: this.DEFAULT_MAP,
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
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Percussion V2": {
      Map: this.DEFAULT_MAP,
      Drums: {
        82: "Shaker",
        59: "Splash 2",
        57: "Crash Cymbal 2",
        56: "Cowbell",
        55: "Splash 1",
        54: "Tambourine",
        53: "Tambourine",
        51: "Tambourine",
        50: "Udu 1",
        49: "Crash Cymbal 1",
        48: "Tom 2",
        46: "Cabasa long",
        45: "Tom 3",
        44: "Cabasa short",
        43: "Udu 4",
        42: "Shaker (one shot)",
        38: "Djembe finger +open",
        37: "Djembe Mute",
        36: "Djembe Bass mute",
        33: "Metronome"
      }
    },
    "Rock V2": {
      Map: this.DEFAULT_MAP,
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
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Voice V2": {
      Map: this.DEFAULT_MAP,
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
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Standard V2": {
      Map: this.DEFAULT_MAP,
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
    "Custom Retro": {
      Map: this.DEFAULT_MAP,
      Drums: {
        82: "Shaker",
        81: "Triangle Open",
        80: "Triangle Closed",
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
        46: "HI-Hat Open",
        45: "Tom 3",
        44: "Foot Hi-Hat",
        43: "Tom 4",
        42: "Hat closed",
        39: "Handclaps",
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Flamenco Percussion": {
      Drums: {
        83: "Castanete Right Hand",
        82: "Castanete Left Hand",
        63: "Feet- tip",
        62: "Feet- stomp",
        61: "Feet- toe",
        60: "Feet- heel",
        59: "Splash 2",
        57: "Crash Cymbal 2",
        56: "Cowbell",
        55: "Splash 1",
        54: "Tambourine",
        49: "Crash Cymbal 1",
        42: "Hi-Hats Closed",
        40: "Handclap R",
        39: "Handclap L",
        38: "Cajon Snare",
        36: "Cajon Bass",
        35: "Kick Drum",
        34: "Bongo Low- muffled",
        33: "Metronome",
        32: "Bongo Low- open",
        31: "Bongo Hi- fingers",
        28: "Bongo Hi- palm",
        27: "Bongo Hi- closed slap",
        26: "Bongo Hi- slap",
        25: "Bongo Hi- muffled",
        24: "Bongo Hi- open",
        23: "Tumba- bass",
        22: "Tumba- palm",
        21: "Tumba- fingers",
        20: "Tumba- rumba slap",
        19: "Tumba- Closed Slap",
        18: "Tumba Open Slap",
        17: "Tumba Muffled",
        16: "Tumba Open",
        15: "Quinto-bass",
        14: "Quinto- palm",
        13: "Quinto- Fingers",
        12: "Quinto-Rumba Slap",
        11: "Quinto- closed slap",
        10: "Quinto- open slap",
        9: "Quinto- muffled",
        8: "Quinto-open",
        7: "Conga- bass",
        6: "Conga- palm",
        5: "Conga- fingers",
        4: "Conga-rumba slap",
        3: "Conga- closed slap",
        2: "Conga- open slap",
        1: "Conga- muffled",
        0: "Conga- open"
      }
    },
    "John Bonham Inspired": {
      Map: this.DEFAULT_MAP,
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
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    Reggae: {
      Map: {
        35: 36, // kick
        34: 33, // metronome
        32: 33, // metronome
        47: 45, // mid tom
        41: 43 // low tom
      },
      Drums: {
        82: "Shaker",
        81: "Triangle Open",
        80: "Triangle Closed",
        77: "Woodblock Low",
        76: "Woodblock Med",
        75: "Woodblock Hi",
        70: "Shaker 2",
        69: "Cabasa",
        68: "Bottle Low",
        67: "Bottle Hi",
        59: "Splash 2",
        57: "Crash Cymbal 2",
        56: "Cowbell",
        55: "Splash 1",
        54: "Tambourine",
        53: "Ride C. Bell",
        52: "Trashformer cymbal",
        51: "Ride Cymbal",
        50: "Tom 1",
        49: "Crash Cymbal 1",
        48: "Tom 2",
        46: "Hi-Hat Open",
        45: "Tom 3",
        44: "Foot Hi-Hat",
        43: "Tom 4",
        42: "Hats dosed",
        40: "Aux Snare",
        39: "Handclaps",
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Standard Pro": {
      Map: {
        34: 33, // metronome
        32: 33, // metronome
        47: 45, // mid tom
        41: 43 // low tom
      },
      Drums: {
        83: "Castanetes",
        82: "Shaker",
        81: "Open Triangle",
        80: "Mute Triangle",
        79: "Open Cuica",
        78: "Mute Cuica",
        77: "Low Woodblock",
        76: "Hi Woodblock",
        75: "Clave",
        74: "Long Guiro",
        73: "Short Guiro",
        72: "Long Whistle",
        71: "Short Whistle",
        70: "Maracas",
        69: "Cabasa",
        68: "Agogo Low",
        67: "High Agogo",
        66: "Low Timbale",
        65: "High Timbale",
        64: "Low Conga",
        63: "Open High Conga",
        62: "Hi Conga Mute",
        61: "Low Bongo",
        60: "Hi Bongo",
        59: "Splash 2",
        57: "Crash Cymbal 2",
        56: "Cowbell",
        55: "Splash 1",
        54: "Tambourine",
        53: "Ride C. Bell",
        52: "China Cymbal",
        51: "Ride Cymbal",
        50: "Tom 1",
        49: "Crash Cymbal 1",
        48: "Tom 2",
        46: "Hi-Hat Open",
        45: "Tom 3",
        44: "Foot Hi-Hat",
        43: "Tom 4",
        42: "Hi-Hats Closed",
        40: "Electronic Snare",
        39: "Handclaps",
        38: "Snare",
        37: "Cross Suck",
        36: "Kick Drum",
        35: "Acoustic Kick",
        33: "Metronome"
      }
    },
    "Studio Legend": {
      Map: {
        35: 36, // kick
        34: 33, // metronome
        32: 33, // metronome
        47: 45, // mid tom
        40: 38, // snare
        41: 43 // low tom
      },
      Drums: {
        82: "Shaker",
        59: "Splash 2",
        57: "Crash Cymbal 2",
        56: "Cowbell",
        55: "Splash 1",
        54: "Tambourine",
        53: "Ride C. Bell",
        52: "Trashformer cymbal",
        51: "Ride Cymbal",
        50: "Tom 1",
        49: "Crash Cymbal 1",
        48: "Tom 2",
        46: "HI-Hat Open",
        45: "Tom 3",
        44: "Foot Hi-Hat",
        43: "Tom 4",
        42: "Hat closed",
        39: "Handclaps",
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "Vintage Ludwig": {
      Map: this.DEFAULT_MAP,
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
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        33: "Metronome"
      }
    },
    "World Percussion": {
      Map: {
        35: 36, // kick
        34: 33, // metronome
        32: 33, // metronome
        47: 45, // mid tom
        40: 38, // snare
        52: 55 // china cymbal
      },
      Drums: {
        85: "Bongo Low- palm",
        84: "Bongo Low- closed slap",
        82: "Shaker",
        75: "Clave",
        59: "Splash 2",
        57: "Hand Crash 2",
        56: "Cowbell",
        55: "Splash 1",
        54: "Tambourine",
        53: "Shaker 3",
        51: "Shaker 2",
        49: "Hand Crash 1",
        45: "Udu Belly Bend",
        42: "Shaker 1",
        41: "Udu Open",
        38: "Cajon Snare",
        36: "Cajon Bass",
        33: "Metronome",
        32: "Bongo Low- open",
        31: "Bongo Hi- fingers",
        29: "Bongo Low- Finger",
        28: "Bongo Hi- palm",
        27: "Bongo Hi- finger slap",
        26: "Bongo Hi- slap",
        25: "Bongo Hi- muffled",
        24: "Bongo Hi- open",
        13: "Mini Bongo Hi- Fingers",
        11: "Mini Bongo Hi- closed slap",
        8: "Mini Bongo-open",
        5: "Mini Bongo Low- fingers",
        1: "Mini Bongo Low- muffled",
        0: "Mini Bongo Low- open"
      }
    },
    "Bosendorfer Jazz Trio 60+C1": {
      Map: {
        40: 38, // Snare
        41: 43, // low tom
      },
      Bass: {
        start: 0,
        end: 31,
        middleC4: 36
      },
      Piano: {
        start: 60,
        end: 127,
        middleC4: 96
      },
      Drums: {
        59: 'Ride 2',
        57: 'Crash Ride 2',
        56: 'Cowbell',
        54: 'Tambourine',
        53: 'Ride Bell',
        52: 'Ride 1 Bow Crash',
        51: 'Ride 1',
        50: 'Tom 1',
        49: 'Crash 1',
        48: 'Tom 2',
        47: 'Foot Hat Open',
        46: 'Hats Open',
        45: 'Tom 3',
        44: 'Foot Hi-Hat',
        43: 'Tom 4',
        42: 'Closed Hats',
        39: 'Stick over stick on snare',
        38: 'Snare',
        37: 'Cross Stix',
        36: 'Kick 1',
        35: 'Kick 2',
        33: 'Clave',
      }
    },
    "Rock with Bass": {
      Map: {
        40: 38, // snare
        34: 37, // metronome
        41: 43, // tow tom
        47: 45, // mid tom
        35: 36, // kick
        52: 49, // china cymbal
        55: 49, // splash 1
        57: 49, // crash 2
        59: 51 // ride 2
      },
      Bass: {
        start: 64,
        end: 88,
        middleC4: 108
      },
      Drums: {
        53: "Ride Bell",
        51: "Ride Cymbal",
        50: "Tom 1",
        49: "Crash 1",
        48: "Tom 2",
        46: "Hi-Hat Open",
        45: "Tom 3",
        44: "Foot Hi-Hat",
        43: "Tom 4",
        42: "Hi-Hats Closed",
        39: "Handclaps",
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum"
      }
    },
    "Rock and Rick Bass 0-31": {
      Map: this.DEFAULT_MAP,
      Drums: {
        82: 'Shaker',
        59: 'Splash 2',
        57: 'Crash 2',
        56: 'Cowbell',
        55: 'Splash 1',
        54: 'Tambourine',
        53: 'Ride Bell',
        51: 'Ride',
        50: 'Tom 1',
        49: 'Crash 1',
        48: 'Tom 2',
        46: 'Hi-Hat Open',
        45: 'Tom 3',
        44: 'Foot Hi-Hat',
        43: 'Tom 4',
        42: 'Hi-Hats Closed',
        39: 'Handclaps',
        38: 'Snare',
        37: 'Cross Stick',
        36: 'Kick',
        33: 'Metronome',
      },
      Bass: {
        start: 0,
        end: 31,
        middleC4: 36
      }
    },
    "Standard P Bass": {
      Map: {
        82: 70, // shaker
        34: 33, // metronome
        41: 43, // tow tom
        47: 45, // mid tom
        62: 63 // conga
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
    },
    "2082 Hammond with Bass 60+C0": {
      Organ: {
        start: 60,
        end: 127,
        middleC4: 108
      },
      Bass: {
        start: 0,
        end: 31,
        middleC4: 36
      },
      Drums: {
        59: "Ride 2",
        58: "Cabasa",
        57: "Crash 2",
        56: "Cowbell",
        55: "Splash",
        54: "Tambourine",
        53: "Ride Bell",
        52: "China",
        51: "Ride",
        50: "High Tom",
        49: "Crash 1",
        48: "High Mid tom",
        47: "Low Mid-Tom",
        46: "Open Hi-Hat",
        45: "Low Tom",
        44: "Pedal Hi-Hat",
        43: "High Floor Tom",
        42: "Closed Hi-Hats",
        41: "Low Floor Tom",
        40: "Brush Snare",
        39: "808 Clap",
        38: "Snare",
        37: "Stick",
        36: "Kick",
        35: "808 Kick",
        34: "Snare Roll",
        33: "Claves"
      }
    },
    "Sub-Std Pro PL Bass 0-31": {
      Bass: {
        start: 0,
        end: 31,
        middleC4: 36
      },
      Drums: {
        82: "Shaker",
        81: "Open Triangle",
        80: "Mute Triangle",
        79: "Open Cuica",
        78: "Mute Cuica",
        77: "Low Woodblock",
        76: "Hi Woodblock",
        75: "Clave",
        74: "Long Guiro",
        73: "Short Guiro",
        72: "Long Whistle",
        71: "Short Whistle",
        70: "Maracas",
        69: "Cabasa",
        68: "Agogo Low",
        67: "High Agogo",
        66: "Low Timbale",
        65: "High Timbale",
        64: "Low Conga",
        63: "Open High Conga",
        62: "Hi Conga Mute",
        61: "Low Bongo",
        60: "Hi Bongo",
        59: "Splash 2",
        57: "Crash Cymbal 2",
        56: "Cowbell",
        55: "Splash 1",
        54: "Tambourine",
        53: "Ride C. Bell",
        52: "China Cymbal",
        51: "Ride Cymbal",
        50: "Tom 1",
        49: "Crash Cymbal 1",
        48: "Tom 2",
        46: "Hi-Hat Open",
        45: "Tom 3",
        44: "Foot Hi-Hat",
        43: "Tom 4",
        42: "Hi-Hats Closed",
        40: "Electronic Snare",
        39: "Handclaps",
        38: "Snare",
        37: "Cross Stick",
        36: "Kick Drum",
        35: "Acoustic Kick",
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
