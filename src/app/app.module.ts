import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";

import { DrumkitCreatorComponent } from "./drumkit-creator/drumkit-creator.component";
import { TrackEditorComponent } from './track-editor/track-editor.component';
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatStepperModule } from "@angular/material/stepper";
import { ExportComponent } from './export/export.component';
import { KitService } from './kit.service';
import { ChangelogComponent } from './changelog/changelog.component';
import { MatTabsModule } from "@angular/material/tabs";


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
    AppRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTabsModule
  ],
  declarations: [AppComponent, DrumkitCreatorComponent, TrackEditorComponent, ExportComponent, ChangelogComponent],
  bootstrap: [AppComponent],
  schemas: [],
  providers: [KitService]
})
export class AppModule {}
