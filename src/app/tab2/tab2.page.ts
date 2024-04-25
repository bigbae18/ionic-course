import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  stories: Array<any> = [];
  actualStory: number = 0;

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.storiesService.getStories()
      .subscribe(stories => {
        this.stories = stories;
      })
  }

  nextStory() {
    this.actualStory = (this.actualStory + 1) % this.stories.length;
  }

}
