import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from 'angularfire2/database';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-art-movements-page',
  templateUrl: './art-movements-page.component.html',
  styleUrls: ['./art-movements-page.component.styl']
})
export class ArtMovementsPageComponent implements OnInit {
  items$: Observable<any>;
  name: string;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items$ = this.db.list('/artMovements').valueChanges();
  }

  trackBy(index, country) {
    return country ? country.id : undefined;
  }
}
