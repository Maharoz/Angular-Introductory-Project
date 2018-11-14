import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
courses=[
  {id:1 , name:'course 1'},
  {id:2 , name:'course 2'},
  {id:3 , name:'course 3'}
];

onAdd(){
  this.courses.push({id:4 , name : 'course 4'});
}

onRemove(course){
let index = this.courses.indexOf(course);
this.courses.splice(index,1);
}
}
