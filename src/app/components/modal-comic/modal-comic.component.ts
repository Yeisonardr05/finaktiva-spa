import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';
import { ComicService } from '../../services/comic.service';
import { ComicModel } from '../../models/comics/comic.model';

@Component({
  selector: 'app-modal-comic',
  templateUrl: './modal-comic.component.html',
  styles: [
  ]
})
export class ModalComicComponent implements OnInit {
  @Input() comic: ComicModel = new ComicModel();

  constructor(
    protected _comicService: ComicService,
  ) {

  }

  ngOnInit(): void {

  }

  clean(): void {
    this.comic = new ComicModel();
  }

  addFavorite(){
    this._comicService.createList(this.comic);    
  }

}
