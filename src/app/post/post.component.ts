import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts : any[];
  private url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
   
   }

   
  ngOnInit() {
    this.http.get(this.url)
    .subscribe(response =>{
      //console.log(response.json());
      this.posts = response.json();
    });
  }

}
