import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../core/services';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.styl']
})
export class ListingComponent implements OnInit{
  query: string;
  items;
  url = 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80';

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = this.countriesService.getCountries();
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      console.log(params.get('name'));
    });

    this.route.queryParamMap.subscribe(params => {
      console.log(params.get('order'));
    });
  }

  trackBy(index, country) {
    return country ? country.id : undefined;
  }

  onChange() {
    console.log(this.query);
  }
}
