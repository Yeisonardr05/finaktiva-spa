import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  search(termino: string) {
    this._router.navigate(['/character', termino])
  }

}
