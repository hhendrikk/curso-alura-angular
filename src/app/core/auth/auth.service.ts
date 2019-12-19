import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(username: string, password: string) {
    return this.http
      .post(
        `${API_URL}/user/login`,
        {
          userName: username,
          password
        },
        { observe: 'response' }
      )
      .pipe(
        tap(res => {
          const token = res.headers.get('x-access-token');
          this.userService.setToken(token);
        })
      );
  }
}
