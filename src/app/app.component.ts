import { Component, VERSION } from '@angular/core';

import { Midi } from '@tonejs/midi';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  midi: Midi;
  fileName: string;
  
  async uploadFile(event) {
    let file = event.target.files[0];
    this.fileName = file.name;
    this.midi = await this.loadFile(file);
    for(let sig of this.midi.header.timeSignatures) {

    }
  }

  loadFile(file : Blob) : Promise<Midi> {
    return new Promise((resolve, reject) => {
          const reader = new FileReader();    // load a midi file in the browser
          reader.onload = (e) =>  {
            resolve(new Midi(<ArrayBuffer> e.target.result));
          }
          reader.onerror = reject;
          reader.readAsArrayBuffer(file);
      })
  }
}


