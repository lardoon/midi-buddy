import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangelogComponent } from './changelog/changelog.component';
import { DrumkitCreatorComponent } from './drumkit-creator/drumkit-creator.component';
import { TrackEditorComponent } from './track-editor/track-editor.component';

const appRoutes: Routes = [
  {
    path: 'drumkit',
    component: DrumkitCreatorComponent,
  },
  { path: '', component: TrackEditorComponent },
  { path: 'changelog', component: ChangelogComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }