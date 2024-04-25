import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent  implements OnInit, OnDestroy {
  @Input() story: any;
  @Output() storyEnded = new EventEmitter<void>();

  progress: number = 0;

  storySubscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.storySubscription = interval(100)
      .subscribe(n => {
        if (n*100 != this.story.time * 1000) {
          this.progress = n * 100 / (this.story.time * 1000)
        }
        else {
          this.nextStory();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.storySubscription)
      this.storySubscription.unsubscribe();
  }

  nextStory() {
    this.storyEnded.emit();
  }

}
