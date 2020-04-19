import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-create-art-movement-form',
  templateUrl: './create-art-movement-form.component.html',
  styleUrls: ['./create-art-movement-form.component.styl']
})
export class CreateArtMovementFormComponent {
  url: string;

  path = '/artMovements';
  createForm = this.fb.group({
    name: ['', Validators.required],
    color: [null, Validators.required],
    info: [null]
  });

  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private route: ActivatedRoute) {}

  onGetUrl({ url }) {
    this.url = url;
  }

  onAdd() {
    const { name, info, color } = this.createForm.value;
    this.db.list(`/${ this.path }`).push({ name, info, color, img: this.url });
  }
}
