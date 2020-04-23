import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ArtMovementsPageComponent,
  CountriesPageComponent,
  HomePageComponent,
  MuseumsPageComponent
} from "./core/containers";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'painters', component: HomePageComponent },
  { path: 'paintings', component: HomePageComponent },
  { path: 'countries', component: CountriesPageComponent },
  { path: 'museums', component: MuseumsPageComponent },
  { path: 'artMovements', component: ArtMovementsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
