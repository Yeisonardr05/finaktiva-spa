import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIENDPOINT, PARAMETER } from '../../../config/configuration';
import { StatusCodeEnum } from '../../../commons/enums/status-code.enum';
import { CharacterService } from '../../../services/character.service';
import { CharacterModel } from '../../../models/characters/character.model';
import { ComicService } from '../../../services/comic.service';
import { ComicModel } from '../../../models/comics/comic.model';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styles: [
  ]
})
export class DetailCharacterComponent implements OnInit {
  idCharacter: number;
  isLoading: boolean = false;
  character: CharacterModel = new CharacterModel();
  comics: Array<ComicModel> = new Array<ComicModel>();
  imgUrl: string;
  collectionURI: string;
  page: number;
  pageSize: number;
  totalItems: number;

  constructor(
    protected _characterService: CharacterService,
    protected _comicService: ComicService,
    protected _router: Router,
    protected _activatedRouter: ActivatedRoute,
  ) {
    this._activatedRouter.params.subscribe(params => {
      this.idCharacter = params.id
      this.getCharacterById();
    });
  }

  ngOnInit(): void {
  }

  getCharacterById() {
    this.isLoading = true;
    this._characterService.getById(APIENDPOINT.characters, this.idCharacter)
      .subscribe(resp => {
        if (resp.code === StatusCodeEnum.OK) {
          this.character = resp.data?.results[0];
          this.imgUrl = `${this.character.thumbnail?.path}.${this.character.thumbnail?.extension}`;
          this.collectionURI = this.character.comics?.collectionURI;
          this.getComicsByCharacter(this.collectionURI, PARAMETER.offset);
          this.isLoading = false;
        }
        else {
          this.isLoading = false;
        }
      });
  }

  onPageChange(pageNumber) {
    this.getComicsByCharacter(this.collectionURI, pageNumber);
  }

  getComicsByCharacter(urlComic: string, offset: number) {    
    this._comicService.getResourceURI(urlComic, offset, PARAMETER.limit - 1)
      .subscribe(resp => {
        if (resp.code === StatusCodeEnum.OK) {
          this.comics = resp.data?.results;
          this.page = resp.data?.offset;
          this.pageSize = resp.data?.limit;
          this.totalItems = resp.data?.total;
        }
        else {
        }
      });
  }
}
