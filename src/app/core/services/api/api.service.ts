import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadInputError } from '../../errors/bad-input/bad-input.error';
import { NotFoundError } from '../../errors/not-found/not-found.error';
import { AppError} from '../../errors/app/app.error';

export class ApiService {
  constructor(private http: HttpClient, private url: string) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource, data) {
    return this.http
      .patch(`${ this.url }/${ resource.id }`, JSON.stringify(data))
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http
      .delete(`${ this.url }/${ id }`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error) {
    if (error.status === 400) { return throwError(new BadInputError()); }
    if (error.status === 404) { return throwError(new NotFoundError()); }
    return throwError(new AppError(error));
  }
}
