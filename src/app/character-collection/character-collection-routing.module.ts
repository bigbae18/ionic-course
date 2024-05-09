import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterCollectionPage } from './character-collection.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterCollectionPageRoutingModule {}
