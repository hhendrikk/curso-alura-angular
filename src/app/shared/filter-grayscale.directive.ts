import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[apFilterGrayscale]'
})
export class FilterGrayscaleDirective {
  constructor(private elem: ElementRef, private render: Renderer2) {}

  @HostListener('mouseover') onMouseOver(): void {
    this.render.setStyle(this.elem.nativeElement, 'filter', 'grayscale(1)');
  }

  @HostListener('mouseout') onMouseOut(): void {
    this.render.removeStyle(this.elem.nativeElement, 'filter');
  }
}
