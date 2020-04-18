import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.styl']
})
export class CreateFormComponent {
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
