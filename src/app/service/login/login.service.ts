import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Login } from '../../model/login';
import { Cookie } from 'ng2-cookies'
import { Response } from '@angular/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class LoginService{
    /* GET heroes whose name contains search term */
  
    constructor(
        private http: HttpClient,

    ){}

    searchLogin (login: Login) {
        Cookie.set("login","1");

        this.http.post<Login>("/login", login, httpOptions).toPromise().then((res:Object)=>{
            Cookie.set("login","1");
            return true;
        },(err)=>{
            return true;
        })
    }
}