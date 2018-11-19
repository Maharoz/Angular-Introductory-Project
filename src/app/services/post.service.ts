import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private url='https://pjsonplaceholder.typicode.com/posts';
  constructor(private http : Http) {

   
   }
   getPosts() {
    return this.http.get(this.url);
  }

  createPosts(post){
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post){
   return this.http.patch(this.url + '/' + post.id , JSON.stringify({ isRead : true}));
  }

  deletePost(id){
    return  this.http.delete(this.url + '/' + id);
  }
}
