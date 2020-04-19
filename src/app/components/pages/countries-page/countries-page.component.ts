import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.styl']
})
export class CountriesPageComponent implements OnInit {
  items$: Observable<any>;
  name: string;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items$ = this.db.list('/countries').valueChanges();
  }

  trackBy(index, country) {
    return country ? country.id : undefined;
  }
}
