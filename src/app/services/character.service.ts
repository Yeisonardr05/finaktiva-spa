import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterModel } from '../models/characters/character.module';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseService<CharacterModel> {

  constructor(
    protected _httpClient: HttpClient
  ) {
    super(_httpClient);
  }
}
