import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GwService {

  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }


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


  getAllGws(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'gws/allGws', this.options).map(res => res.json());
  }



  getSingleGw(id){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'gws/singleGw/' + id, this.options).map(res => res.json());
  }

  editGw(gw){
    this.createAuthenticationHeaders();
    return this.http.put(this.domain + 'gws/updateGw/', gw, this.options).map(res => res.json());
  }

  deleteGw(id){
    this.createAuthenticationHeaders();
    return this.http.delete(this.domain + 'gws/deleteGw/' + id, this.options).map(res => res.json());
  }

}
