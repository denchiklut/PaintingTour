import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.styl']
})
export class CountriesComponent implements OnInit {
  countries$: Observable<any>;

  constructor(private db: AngularFireDatabase ) { }

  ngOnInit(): void {
    this.countries$ = this.db.list('/countries').valueChanges();
  }
}
