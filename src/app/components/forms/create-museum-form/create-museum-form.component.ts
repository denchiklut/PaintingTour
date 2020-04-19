import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-museum-form',
  templateUrl: './create-museum-form.component.html',
  styleUrls: ['./create-museum-form.component.styl']
})
export class CreateMuseumFormComponent {
  url: string;

  path = '/museums';
  createForm = this.fb.group({
    name: ['', Validators.required],
    info: [null]
  });

  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private route: ActivatedRoute) {}

  onGetUrl({ url }) {
    this.url = url;
  }

  onAdd() {
    const { name, info } = this.createForm.value;
    this.db.list(`/${ this.path }`).push({ name, info, img: this.url });
  }
}
