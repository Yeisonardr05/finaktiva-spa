import { Component, OnInit } from '@angular/core';
import { APIENDPOINT } from '../../../config/configuration';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styles: [
  ]
})
export class ListCharacterComponent implements OnInit {

  constructor(
    protected _characterService: CharacterService
  ) {

  }

  ngOnInit(): void {
    this._characterService.getAll(APIENDPOINT.characters)
      .subscribe(data => {
        console.log(data);
      });
  }
}
