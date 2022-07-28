import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiHost = environment.melitaApiHost;

  constructor(private _http: HttpClient) { }

  getOffers() {
    const endpoint = this.apiHost + '/interview/backend/api/offers';

    return this._http.get(endpoint, {
      headers: {'Authorization':'Bearer ' + localStorage.getItem('AuthToken')}
    });
  }

  getOfferSubscription(offerId: number) {
    const endpoint = this.apiHost + `/interview/backend/api/offers/${offerId}/subscriptions`;

    return this._http.get(endpoint, {
      headers: {'Authorization':'Bearer ' + localStorage.getItem('AuthToken')}
    });
  }
}
