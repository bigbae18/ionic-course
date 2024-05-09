import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../rick-and-morty/services/character.service';
import { Character } from '../rick-and-morty/models/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-collection',
  templateUrl: './character-collection.page.html',
  styleUrls: ['./character-collection.page.scss'],
})
export class CharacterCollectionPage implements OnInit {

  characters$: Observable<Character[]>;

  constructor(
    private characterService: CharacterService
  ) { 
    this.characters$ = this.characterService.characters;
  }

  ngOnInit(): void {
    this.characterService.load();  
  }

  back() {
    this.characterService.goBack();
  }
  forward() {
    this.characterService.goForward();
  }
}
