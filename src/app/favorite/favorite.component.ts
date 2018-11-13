import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  
  styles:[
    `
    .glyphicon{
      color:green;
  }
  .glyphicon-star{
    background:black;
  }
    `
  ],
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
 @Input('isFavorite')isFavorite:boolean;
 @Output('change') change = new EventEmitter();


  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }

}

export interface FavouriteChangedEventArgs{
  newValue : boolean;
}
