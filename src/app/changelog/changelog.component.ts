import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {

  constructor() { }

  onePressSongCreatorlog: {[key:string]:string[]} = {
    "1.0.2": [
      "Added 3 user kits including Bosendorfer Jazz Trio 60+C1"
    ],
    "1.0.1": [
      "Added Premium kits"
    ],
    "1.0.0": [
      "Initial release",
      "Included Default V2 kits in kit selector",
      "Included 4 user kits in kit selector"
    ]
  }

  ngOnInit() {
  }

}