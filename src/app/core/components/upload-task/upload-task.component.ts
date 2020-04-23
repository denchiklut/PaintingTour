import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.styl']
})
export class UploadTaskComponent {
  @Output() getUrl = new EventEmitter();
  @Input() folder: string;

  fileBtn =  'Add a photo';
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;

  constructor(private storage: AngularFireStorage) { }

  startUpload(event) {
    const file = event.target.files[0];
    this.fileBtn = file.name;

    const path = `${ this.folder }/${ Date.now() }_${ file.name }`;
    const ref = this.storage.ref(path);

    this.task = this.storage.upload(path, file);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize( () => {
        ref.getDownloadURL().subscribe(
          (url) => {
            this.getUrl.emit({ url });
          }
        );
      })
    );

    this.snapshot.subscribe();
  }

  isActive(snapShot) {
    return snapShot.state === 'running' && snapShot.bytesTransferred < snapShot.totalBytes;
  }

}
