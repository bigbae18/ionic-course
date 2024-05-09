import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCollectionPage } from './character-collection.page';

describe('CharacterCollectionPage', () => {
  let component: CharacterCollectionPage;
  let fixture: ComponentFixture<CharacterCollectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
