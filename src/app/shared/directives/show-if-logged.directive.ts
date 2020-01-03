import { OnInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[apShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {
  constructor(
    private userService: UserService,
    private elem: ElementRef<any>,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if (!this.userService.isLogged()) {
      this.renderer.setStyle(this.elem.nativeElement, 'display', 'none');
    }
  }
}
