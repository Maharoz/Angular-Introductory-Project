import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
task = {
  title: 'Review Application',
  assignee:{
    name:'john smith'
  }
}
}
