import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs/Subscriber';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts : any[];
 
  constructor(private service: PostService) {
   
   }

  ngOnInit() {

this.service.getAll()
    .subscribe(
      posts => this.posts = posts
    );
   }

   createPost(input : HTMLInputElement){
     let post = { title : input.value };
     input.value ='';
     this.service.create(post)
    .subscribe(
      newPost => {
      post['id'] = newPost.id;
      this.posts.splice(0,0, post);
      
    },(error : AppError) =>{
      if(error instanceof BadInput){
       // this.form.setError(error.originalError);
      }else{
       throw error;
      }      
    });
   }

   UpdatePost(post){
    this.service.update(post)
     .subscribe(
       updatedPost =>{
      console.log(updatedPost);
     });
   }

   deletePost(post){
    this.service.delete(345)
     .subscribe(
       () => {
       let index = this.posts.indexOf(post);
       this.posts.splice(index,1);
     },
     (error : AppError) =>{
       if(error instanceof NotFoundError)
       alert('this post has already been deleted');
       else{
        throw error;
       }
     
    });
  }

}
