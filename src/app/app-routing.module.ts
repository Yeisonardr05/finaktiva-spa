import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharacterComponent } from './views/characters/list-character/list-character.component';

const routes: Routes = [
  { path: '', component: ListCharacterComponent },
  { path: 'character/:termino', component: ListCharacterComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
