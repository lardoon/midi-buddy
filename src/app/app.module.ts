import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";

import { DrumkitCreatorComponent } from "./drumkit-creator/drumkit-creator.component";

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
    MatButtonModule
  ],
  declarations: [AppComponent, DrumkitCreatorComponent],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {}
