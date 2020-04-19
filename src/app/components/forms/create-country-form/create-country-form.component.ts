import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-create-country-form',
  templateUrl: './create-country-form.component.html',
  styleUrls: ['./create-country-form.component.styl']
})
export class CreateCountryFormComponent {
  url: string;

  path = '/countries';
  createForm = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private route: ActivatedRoute) {}

  onGetUrl({ url }) {
    this.url = url;
  }

  onAdd() {
    const { name } = this.createForm.value;
    this.db.list(`/${ this.path }`).push({ name, img: this.url });
  }
}
