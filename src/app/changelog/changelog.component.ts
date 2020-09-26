import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {

  constructor() { }

  public static get latestVersionNo() {
    let versions = Object.keys(ChangelogComponent.onePressSongCreatorlog);
    versions.sort();
    return versions[versions.length - 1];
  }
  
  get log() {
    return ChangelogComponent.onePressSongCreatorlog;
  }

  public static onePressSongCreatorlog: {[key:string]:string[]} = {
    "1.0.3": [
      "Added STAX Synth & Strings kit"
    ],
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