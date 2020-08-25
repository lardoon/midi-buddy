import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule} from '@angular/material/table';

import { DrumkitCreatorComponent } from "./drumkit-creator/drumkit-creator.component";
import { TrackEditorComponent } from './track-editor/track-editor.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, DrumkitCreatorComponent, TrackEditorComponent],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {}
