import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'painters', component: ListingComponent },
  { path: 'paintings', component: ListingComponent },
  { path: 'countries', component: ListingComponent },
  { path: 'museums', component: ListingComponent },
  { path: 'artMovements', component: ListingComponent },
  // { path: 'countries/:id/:name', component: ListingComponent },
  // { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
