import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComicModel } from '../../models/comics/comic.model';

@Component({
  selector: 'app-card-comic',
  templateUrl: './card-comic.component.html',
  styles: [
  ]
})
export class CardComicComponent implements OnInit {
  @Input() comic: ComicModel = new ComicModel();
  @Output('comicEvent') comicEvent = new EventEmitter();
  imgUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.imgUrl = `${this.comic.thumbnail?.path}.${this.comic.thumbnail?.extension}`;
  }

  getComicDetail() {
    this.comicEvent.emit(this.comic);
  }
}
