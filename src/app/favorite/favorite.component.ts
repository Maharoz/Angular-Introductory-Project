import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs:['isFavorite']
})
export class FavoriteComponent implements OnInit {
 isFavorite:boolean;
 @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }

}