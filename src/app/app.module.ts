import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCharacterComponent } from './views/characters/list-character/list-character.component';
import { DetailCharacterComponent } from './views/characters/detail-character/detail-character.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CardComponent } from './components/card/card.component';
import { FavoriteComponent } from './views/favorites/favorite/favorite.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardComicComponent } from './components/card-comic/card-comic.component';
import { ModalComicComponent } from './components/modal-comic/modal-comic.component';
import { CardFavoriteComponent } from './components/card-favorite/card-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCharacterComponent,
    DetailCharacterComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    CardComponent,
    FavoriteComponent,
    CardComicComponent,
    ModalComicComponent,
    CardFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
