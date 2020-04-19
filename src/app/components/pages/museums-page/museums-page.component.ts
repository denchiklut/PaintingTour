import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-museums-page',
  templateUrl: './museums-page.component.html',
  styleUrls: ['./museums-page.component.styl']
})
export class MuseumsPageComponent implements OnInit {
  items$: Observable<any>;
  name: string;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items$ = this.db.list('/museums').valueChanges();
  }

  trackBy(index, country) {
    return country ? country.id : undefined;
  }
}
