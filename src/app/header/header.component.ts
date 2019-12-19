import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user/user.service';
import { Observable } from 'rxjs';
import { User } from '../core/user/user';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }
}
