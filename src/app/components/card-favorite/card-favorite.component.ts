import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComicStorageModel } from '../../models/comics/comic-storage.model';

@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  styles: [
  ]
})
export class CardFavoriteComponent implements OnInit {
  @Input() favorite: ComicStorageModel = new ComicStorageModel();
  @Output('deleteEvent') deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteFavorite() {
    this.deleteEvent.emit(this.favorite);
  }

}
