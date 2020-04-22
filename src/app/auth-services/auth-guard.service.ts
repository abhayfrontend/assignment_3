import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, public auth: AuthService, public router: Router) { }

  login(params): Observable<any> {
    let url = 'https://loginapi.productivise.io/api/authenticate';
    return this.http.post(url, params, this.httpOptions);
  }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}





