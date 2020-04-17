import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent {
  url: string;

  path = this.route.snapshot.url[0]?.path;
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
