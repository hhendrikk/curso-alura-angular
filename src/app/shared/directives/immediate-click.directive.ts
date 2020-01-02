import { Directive, OnInit, ElementRef } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Directive({
  selector: '[apImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private elem: ElementRef<any>,
    private platformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    if (this.platformDetector.isPlatformBrowser()) {
      this.elem.nativeElement.click();
    }
  }
}
