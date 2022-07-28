import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authBaseUrl = environment.melitaApiHost;

  constructor(private _http: HttpClient) { }

  login(credentials: any) {
    const loginEndpoint = this.authBaseUrl + '/interview/backend/api/login';

    return this._http.post(loginEndpoint, credentials);
  }
}
