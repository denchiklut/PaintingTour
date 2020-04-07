import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../core/services';
import { AppError } from '../../core/errors/app/app.error';
import { BadInputError } from '../../core/errors/bad-input/bad-input.error';
import { NotFoundError } from '../../core/errors/not-found/not-found.error';
import {Post} from './Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.styl']
})
export class PostComponent implements OnInit{
  posts: any;

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service
      .getAll()
      .subscribe(post => this.posts = post);
  }

  addPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service
      .create(post)
      .subscribe(
        (newPost: Post) => post.id = newPost.id,
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInputError) {
            // this.form.setErrors(error.json());
          }
          else { throw error; }
        }
      );
  }

  updatePost(post) {
    this.service
      .update(post, { isRed: true })
      .subscribe( updatedPost => console.log(updatedPost));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service
      .delete(post.id)
      .subscribe(
        null,
        (error: Response) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('this post was already deleted');
          }
          else { throw error; }
        }
      );
  }
}
