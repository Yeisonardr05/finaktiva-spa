import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComicStorageModel } from '../models/comics/comic-storage.model';
import { ComicModel } from '../models/comics/comic.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class ComicService extends BaseService<ComicModel> {

  comicFavoriteList: Array<ComicStorageModel> = new Array<ComicStorageModel>();

  constructor(
    protected _httpClient: HttpClient
  ) {
    super(_httpClient);
  }

  createList(comic: ComicModel) {
    const newList = new ComicStorageModel();
    newList.id = comic.id;
    newList.title = comic.title;
    newList.thumbnail = comic.thumbnail;
    this.comicFavoriteList.push(newList);
    this.saveStorage();
    return newList.id;
  }

  deleteList(comic: ComicStorageModel) {
    this.comicFavoriteList = this.comicFavoriteList.filter(listaData => listaData.id !== comic.id);
    this.saveStorage();
  }

  getList(id: string | number) {
    id = Number(id);
    return this.comicFavoriteList.find(listaData => listaData.id === id);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.comicFavoriteList));
  }

  loadStorage() {
    if (localStorage.getItem('data')) {
      this.comicFavoriteList = JSON.parse(localStorage.getItem('data'));
    } else {
      this.comicFavoriteList = [];
    }
  }
}
