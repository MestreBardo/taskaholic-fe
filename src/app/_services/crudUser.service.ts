import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegister } from '../_Models/user-register.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudUserService {
  public userCreate = new EventEmitter<UserRegister>();
  baseUrl = 'https://localhost:44339/user/';
  constructor(private http: HttpClient) { }
  createUser(user: UserRegister) {
    // tslint:disable-next-line: prefer-const
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.post(`${this.baseUrl}register`, user , {headers: headers})
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  getUsers(SearchCriteriaEmail: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.post(`${this.baseUrl}usuarios`, {SearchCriteriaEmail}, {headers: headers} )
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  changeUsersActive(id: string, isActive: boolean) {
    // tslint:disable-next-line: prefer-const
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.post(`${this.baseUrl}ChangeActive`, {id, isActive} , {headers: headers})
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  changeUsersData(user: UserRegister) {
    // tslint:disable-next-line: prefer-const
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.post(`${this.baseUrl}ChangeData`, user, {headers: headers} )
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}

