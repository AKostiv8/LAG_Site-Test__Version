import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GwService {

  options;
  domain = this.authService.domain;
  domain1 = "http://localhost:8080/";

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }


  getAllGws(){
    // this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'gws/allGws', this.options).map(res => res.json());
  }


  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }




  newGw(gw) {
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + 'gws/newMagazine', gw, this.options).map(res => res.json());
  }


}
