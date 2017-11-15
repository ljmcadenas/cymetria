import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user.model';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(email, password): Observable<boolean> {
    return this.http.get('assets/data/bd.json')
      .map( (data: {users: User[]}) => { 
        const user = data.users.filter( user => user.email === email && user.password === password);
        
        if (user.length) {
          localStorage.setItem('user', JSON.stringify(user[0]));
          return true;
        }
    
        return false;
      });
  }

  logout(): void {
    localStorage.removeItem('user');
  }

   isLoggedIn(): boolean {
    return localStorage.getItem('user') ? true : false;
  }
}
