import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';
import { ComicService } from '../../services/comic.service';
import { ComicModel } from '../../models/comics/comic.model';
import { ComicStorageModel } from '../../models/comics/comic-storage.model';

@Component({
  selector: 'app-modal-comic',
  templateUrl: './modal-comic.component.html',
  styles: [
  ]
})
export class ModalComicComponent implements OnInit {
  @Input() comic: ComicModel = new ComicModel();
  favorite: ComicStorageModel = new ComicStorageModel();
  isDisable: boolean;

  constructor(
    protected _comicService: ComicService,
  ) {
  }

  ngOnInit(): void {
  }

  addFavorite() {
    this._comicService.createList(this.comic);
  }
}
