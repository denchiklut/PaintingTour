import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.styl']
})
export class ListingComponent implements OnInit {
  items$: Observable<any>;
  name: string;
  url: string;

  isActive = false;
  path = this.route.snapshot.url[0]?.path;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items$ = this.db.list(`/${ this.path }`).valueChanges();
  }

  onGetUrl({ url }) {
    this.url = url;

    if (this.name !== '') {
      this.isActive = true;
    }
  }

  onAdd() {
    this.db.list(`/${ this.path }`).push({ name: this.name, img: this.url });

    this.name = '';
    this.url = '';
  }

  trackBy(index, country) {
    return country ? country.id : undefined;
  }
}
