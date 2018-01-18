import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { User } from '../interfaces/user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credenciais: { email: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${environment.urlBase}/auth/login`, credenciais)
      // return this.http.post<any>(`${environment.urlBase}/oauth/token`, credenciais,`${environment.client,environment.grant_type}`)
      .do(data => {
        localStorage.setItem('token', data.token);
        //  localStorage.setItem('access_token', data.token);
        localStorage.setItem('user', btoa(JSON.stringify(data.user)));
      });
  }

  logout(): void {
    this.http.get(`${environment.urlBase}/auth/logout`).subscribe(resp => {
      //this.http.get(`${environment.urlBase}/oauth/token`).subscribe(resp => { 
      console.log(resp);
      localStorage.clear();
      this.router.navigate(['auth/login']);
    });
  }

  getUser(): User {
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

  setUser(): Promise<boolean> {
    return this.http.get<any>(`${environment.urlBase}/auth/user`).toPromise()
      .then(data => {
        if (data.user) {
          localStorage.setItem('user', btoa(JSON.stringify(data.user)));
          return true;
        }
        return false;
      });
  }

}
