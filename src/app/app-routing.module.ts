import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { FormComponent } from './components/form/form.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'countries/:id/:name', component: ListingComponent },
  { path: 'posts', component: PostComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
