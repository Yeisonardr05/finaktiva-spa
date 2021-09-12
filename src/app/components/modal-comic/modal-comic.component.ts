import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';
import { ComicModel } from '../../models/comics/comic.model';

@Component({
  selector: 'app-modal-comic',
  templateUrl: './modal-comic.component.html',
  styles: [
  ]
})
export class ModalComicComponent implements OnInit {
  @Input() comic: ComicModel = new ComicModel();

  constructor() {

  }

  ngOnInit(): void {

  }

  clean(): void {
    this.comic = new ComicModel();
  }

}
