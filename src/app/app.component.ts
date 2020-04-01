import { Component } from '@angular/core';
import { CountriesService } from './core/services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Painting Tour';
  items: string[];
  query: string;

  constructor(private snackBar: MatSnackBar, countriesService: CountriesService) {
    this.items = countriesService.getCountries();
  }

  url = 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80';

  onChange() {
    console.log(this.query);
  }

  openSnackBar() {
    this.snackBar.open('message', 'action', {
      horizontalPosition: 'right',
      duration: 2000
    });
  }
}
