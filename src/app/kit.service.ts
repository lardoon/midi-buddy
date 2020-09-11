import { Injectable } from '@angular/core';

@Injectable()
export class KitService {

  constructor() { }


  kits: {[key:string]:{[key:string]: {
    [key:number]: KitInstrument
  }}} = {
    "Standard": {
      "Drums": {}
    }
  }

}

export interface KitInstrument {
  name: string;
  startNumber: number;
  endNumber: number;
  middleC4: number;
}