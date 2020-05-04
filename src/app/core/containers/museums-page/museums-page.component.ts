import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fade } from "../../../shared/animations";

@Component({
  selector: 'app-museums-page',
  templateUrl: './museums-page.component.html',
  styleUrls: ['./museums-page.component.styl'],
  animations: [
    fade
  ]
})
export class MuseumsPageComponent implements OnInit {
  items$: Observable<any>;
  name: string;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items$ = this.db.list('/museums').snapshotChanges()
      .pipe(
        // @ts-ignore
        map(changes => changes.map(c => ({ id: c.payload.key, ...c.payload.val() })))
      );
  }

  trackBy(index, country) {
    return country ? country.id : undefined;
  }

  delete(museum) {
    this.db.object('/museums/' + museum.id)
      .remove()
      .catch(err => console.log(err));
  }
}
