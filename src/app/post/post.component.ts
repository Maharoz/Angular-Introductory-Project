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
    .subscribe(response =>{
      //console.log(response.json());
      this.posts = response.json();
    });
   }

   createPost(input : HTMLInputElement){
     let post = { title : input.value };
     input.value ='';
     this.service.createPosts(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0,0, post);
      
    });
   }

   UpdatePost(post){
    this.service.updatePost(post)
     .subscribe(response =>{
      console.log(response.json());
     })
   }

   deletePost(post){
    this.service.deletePost(post.id)
     .subscribe(response =>{
       let index = this.posts.indexOf(post);
       this.posts.splice(index,1);
     })
  }

}
