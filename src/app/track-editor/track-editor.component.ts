import { Component, OnInit } from '@angular/core';
import { Midi } from '@tonejs/midi';

@Component({
  selector: 'app-track-editor',
  templateUrl: './track-editor.component.html',
  styleUrls: ['./track-editor.component.css']
})
export class TrackEditorComponent implements OnInit {

  displayColumns = ['name', 'channel', 'instrument', 'family'];

  constructor() { }

  ngOnInit() {
  }

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