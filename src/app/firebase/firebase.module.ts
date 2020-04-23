import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ]
})
export class FirebaseModule { }
