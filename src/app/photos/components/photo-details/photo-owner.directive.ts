import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { PhotoDetail } from '../../models/photoDetail.model';

@Directive({
  selector: '[apPhotoOwner]'
})
export class PhotoOwnerDirective implements OnInit {
  @Input() photoOwner: PhotoDetail;

  constructor(
    private userService: UserService,
    private elem: ElementRef<any>,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      if (!user || user.id !== this.photoOwner.userId) {
        this.render.setStyle(this.elem.nativeElement, 'display', 'none');
      }
    });
  }
}
