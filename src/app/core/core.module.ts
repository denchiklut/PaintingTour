import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../material";
import {
  CreateArtMovementFormComponent,
  CreateCountryFormComponent,
  CreateMuseumFormComponent,
  PostComponent,
  SidenavComponent,
  UploadTaskComponent
} from './components';
import {
  AppComponent,
  ArtMovementsPageComponent,
  CountriesPageComponent,
  HomePageComponent,
  MuseumsPageComponent
} from './containers';
import {SummaryPipe} from "../shared/pipes";


export const COMPONENTS = [
  CreateArtMovementFormComponent,
  CreateCountryFormComponent,
  CreateMuseumFormComponent,
  PostComponent,
  SidenavComponent,
  UploadTaskComponent,
  AppComponent,
  ArtMovementsPageComponent,
  CountriesPageComponent,
  HomePageComponent,
  MuseumsPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
    declarations: [
        COMPONENTS,
        SummaryPipe
    ],
  exports: COMPONENTS,
})
export class CoreModule {}
