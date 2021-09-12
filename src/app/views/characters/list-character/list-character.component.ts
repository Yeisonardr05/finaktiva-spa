import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '../../../models/characters/character.model';
import { StatusCodeEnum } from '../../../commons/enums/status-code.enum';
import { APIENDPOINT, PARAMETER } from '../../../config/configuration';
import { CharacterService } from '../../../services/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styles: [
  ]
})
export class ListCharacterComponent implements OnInit {
  characters: Array<CharacterModel> = new Array<CharacterModel>();
  isLoading: boolean = false;
  page: number;
  pageSize: number;
  totalItems: number;
  termino: string;
  searchString: string;

  constructor(
    protected _characterService: CharacterService,
    private _activateRouter: ActivatedRoute
  ) {
    this._activateRouter.params.subscribe(params => {
      this.termino = params['termino'];
      this.search();
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  onPageChange(pageNumber) {
    this.getAll(pageNumber);
  }

  search() {
    if (this.termino?.length > 0) {
      this.searchString = `nameStartsWith=${this.termino}`;
    }
    else {
      this.searchString = "";
    }
    this.getAll();
  }

  getAll(offset: number = PARAMETER.offset) {
    this.isLoading = true;
    this._characterService.getAll(APIENDPOINT.characters, offset, this.searchString)
      .subscribe(resp => {
        if (resp.code === StatusCodeEnum.OK) {
          this.characters = resp.data?.results
          this.page = resp.data?.offset;
          this.pageSize = resp.data?.limit;
          this.totalItems = resp.data?.total;
          this.isLoading = false;
        }
        else {
          this.isLoading = false;
        }
      });
  }
}
