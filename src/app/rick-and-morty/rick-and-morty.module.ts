import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListHandlerComponent } from './character-list-handler/character-list-handler.component';
import { IonicModule } from '@ionic/angular';
import { CharacterCardComponent } from './character-card/character-card.component';



@NgModule({
  declarations: [
    CharacterListHandlerComponent, 
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CharacterListHandlerComponent]
})
export class RickAndMortyModule { }
