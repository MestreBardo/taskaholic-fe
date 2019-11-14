import { Injectable } from '@angular/core';
import { UserLogin } from '../_Models/UserLogin.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:44339/user/';
  jwtHelper = new JwtHelperService();

constructor(private http: HttpClient) { }

  login(userLogin: UserLogin) {
    return this.http.post(`${this.baseUrl}login`, userLogin )
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
