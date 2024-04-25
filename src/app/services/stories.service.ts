import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  private stories = [
    { id: 0, img: 'assets/stories/1.png', time: 10 },
    { id: 1, img: 'assets/stories/2.jpg', time: 15 },
    { id: 2, img: 'assets/stories/3.jpg', time: 10 },
    { id: 3, img: 'assets/stories/1.png', time: 5 },
  ]

  constructor() { }

  getStories() {
    return of(this.stories);
  }
}
