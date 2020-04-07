import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../core/services';
import { AppError } from '../../core/errors/app/app.error';
import { BadInputError } from '../../core/errors/bad-input/bad-input.error';
import { NotFoundError } from '../../core/errors/not-found/not-found.error';

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
      .subscribe(
        response => {
          this.posts = response;
        });
  }

  addPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    this.service
      .create(post)
      .subscribe(
        response => {
          post.id = response;
          this.posts.splice(0, 0, post);
          input.value = '';
        },
        (error: AppError) => {
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
      .subscribe(
        response => {
          console.log(response);
        });
  }

  deletePost(post) {
    this.service
      .delete(post.id)
      .subscribe(
        response => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if (error instanceof NotFoundError) {
            alert('this post was already deleted');
          }
          else { throw error; }
        }
      );
  }
}
