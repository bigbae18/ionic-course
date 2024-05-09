import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterCollectionPageRoutingModule } from './character-collection-routing.module';

import { CharacterCollectionPage } from './character-collection.page';
import { RickAndMortyModule } from '../rick-and-morty/rick-and-morty.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterCollectionPageRoutingModule,
    RickAndMortyModule
  ],
  declarations: [CharacterCollectionPage]
})
export class CharacterCollectionPageModule {}
