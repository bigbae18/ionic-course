import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    StoryRoutingModule
  ],
  declarations: [StoryComponent],
  exports: [StoryComponent]
})
export class StoryModule { }
