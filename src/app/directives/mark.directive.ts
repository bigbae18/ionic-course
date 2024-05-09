import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMark]'
})
export class MarkDirective {
  @HostBinding('style.backgroundColor') bgColor: string = '';
  @HostBinding('style.color') textColor: string = '';

  markBgColor: string = 'red';
  markTextColor: string = 'black';

  constructor() 
  {
  }

  @HostListener('mouseover') onMouseOver() {
    this.bgColor = this.markBgColor;
    this.textColor = this.markTextColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = '';
    this.textColor = '';
  }

}
