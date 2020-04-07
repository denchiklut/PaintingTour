import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends ApiService {
  constructor(http: HttpClient) {
    super(http, 'https://jsonplaceholder.typicode.com/posts');
  }
}
