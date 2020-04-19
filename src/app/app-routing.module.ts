import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CountriesPageComponent } from './components/pages/countries-page/countries-page.component';
import { MuseumsPageComponent } from './components/pages/museums-page/museums-page.component';
import { ArtMovementsPageComponent } from './components/pages/art-movements-page/art-movements-page.component';


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
