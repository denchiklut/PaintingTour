import { Component } from '@angular/core';
import { CountriesService } from '../../core/services';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.styl']
})
export class ListingComponent {
  query: string;
  items: string[];
  url = 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80';

  constructor(countriesService: CountriesService) {
    this.items = countriesService.getCountries();
  }

  onChange() {
    console.log(this.query);
  }
}
