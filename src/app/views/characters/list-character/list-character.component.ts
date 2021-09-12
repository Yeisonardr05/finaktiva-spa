import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '../../../models/characters/character.model';
import { StatusCodeEnum } from '../../../commons/enums/status-code.enum';
import { APIENDPOINT } from '../../../config/configuration';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styles: [
  ]
})
export class ListCharacterComponent implements OnInit {
  characters: Array<CharacterModel> = new Array<CharacterModel>();
  isLoading: boolean = false;

  constructor(
    protected _characterService: CharacterService
  ) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.isLoading = true;
    this._characterService.getAll(APIENDPOINT.characters)
      .subscribe(resp => {
        if (resp.code === StatusCodeEnum.OK) {
          this.characters = resp.data?.results
          this.isLoading = false;
        }
        else {
          //this._swal.warning(resp.message);
          this.isLoading = false;
        }
      });
  }
}
