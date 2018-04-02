import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Login } from '../../model/login';
import { Cookie } from 'ng2-cookies'
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class LoginService{
    /* GET heroes whose name contains search term */
  
    constructor(
        private http: HttpClient
    ){}

    searchLogin (login: Login): Observable<Login> {

        return this.http.post<Login>("/login", login, httpOptions)
    }
}