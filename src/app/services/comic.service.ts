import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComicModel } from '../models/comics/comic.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class ComicService extends BaseService<ComicModel> {

  constructor(
    protected _httpClient: HttpClient
  ) {
    super(_httpClient);
  }
}
