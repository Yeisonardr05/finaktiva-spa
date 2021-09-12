import { Component, OnInit } from '@angular/core';
import { ComicStorageModel } from '../../../models/comics/comic-storage.model';
import { ComicService } from '../../../services/comic.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: [
  ]
})
export class FavoriteComponent implements OnInit {
  favoriteList: Array<ComicStorageModel> = new Array<ComicStorageModel>();

  constructor(
    protected _comicService: ComicService,
  ) { }

  ngOnInit(): void {
    this.getFavorite();
  }

  getFavorite() {
    this._comicService.loadStorage();
    this.favoriteList = this._comicService.comicFavoriteList;
  }

  deleteFavorite(favorite: ComicStorageModel) {
    this._comicService.deleteList(favorite);
    this.getFavorite();
  }
}
