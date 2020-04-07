import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.styl']
})
export class PostComponent {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  posts: any;

  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      });
  }

  addPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post.id = response;
        this.posts.splice(0, 0, post);
        input.value = '';
      });
  }

  updatePost(post) {
    this.http.patch(`${ this.url }/${ post.id }`, JSON.stringify({ isRed: true }))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.http.delete(`${ this.url }/${ post.id }`)
      .subscribe( response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
