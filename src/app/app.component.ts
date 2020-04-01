import { Component } from '@angular/core';
import { CountriesService } from './core/services';
import { QueryChangedEvent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Painting Tour';
  items: string[];

  constructor(countriesService: CountriesService) {
    this.items = countriesService.getCountries();
  }

  onChange = (query: QueryChangedEvent) => console.log('query changed', query.q);
}
