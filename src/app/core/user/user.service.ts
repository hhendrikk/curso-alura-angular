import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import * as jwt_decode from 'jwt-decode';
import { User } from './user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string;
  userSubject = new Subject<User>();
  constructor(private tokenService: TokenService) {}

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUser() {
    return this.userSubject.asObservable();
  }
}
