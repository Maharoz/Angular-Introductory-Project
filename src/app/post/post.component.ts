import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs/Subscriber';

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

this.service.getPosts()
    .subscribe(
      response =>{
      //console.log(response.json());
      this.posts = response.json();
    },
     error =>{
      alert('An unexpected error occured');
      console.log(error);
    });
   }

   createPost(input : HTMLInputElement){
     let post = { title : input.value };
     input.value ='';
     this.service.createPosts(post)
    .subscribe(
      response => {
      post['id'] = response.json().id;
      this.posts.splice(0,0, post);
      
    },(error : Response) =>{
      if(error.status === 400){

      }else{
        alert('An unexpected error occured');
        console.log(error);
      }      
    });
   }

   UpdatePost(post){
    this.service.updatePost(post)
     .subscribe(
       response =>{
      console.log(response.json());
     },error =>{
      alert('An unexpected error occured');
      console.log(error);
    });
   }

   deletePost(post){
    this.service.deletePost(345)
     .subscribe(
       response => {
       let index = this.posts.indexOf(post);
       this.posts.splice(index,1);
     },
     (error : Response) =>{
       if(error.status === 404)
       alert('this post has already been deleted');
       else{
        alert('An unexpected error occured');
        console.log(error);
       }
     
    });
  }

}
