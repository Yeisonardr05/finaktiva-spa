import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from '../../models/characters/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {
  @Input() character: CharacterModel = new CharacterModel();
  imgUrl: string;

  constructor() {

  }

  ngOnInit(): void {
    this.imgUrl = `${this.character.thumbnail?.path}.${this.character.thumbnail?.extension}`;
  }

}
