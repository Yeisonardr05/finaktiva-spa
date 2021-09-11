import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCharacterComponent } from './views/characters/list-character/list-character.component';
import { DetailCharacterComponent } from './views/characters/detail-character/detail-character.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCharacterComponent,
    DetailCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
