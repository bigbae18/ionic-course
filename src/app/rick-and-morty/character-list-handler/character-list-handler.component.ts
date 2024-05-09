import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-list-handler',
  templateUrl: './character-list-handler.component.html',
  styleUrls: ['./character-list-handler.component.scss'],
})
export class CharacterListHandlerComponent  implements OnInit {
  @Input() characters?: Character[] | null = [];

  constructor() { }

  ngOnInit() {

  }

}
