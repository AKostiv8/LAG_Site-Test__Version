import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EventsService {

  options;
  domain = this.authService.domain;
  drive;
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




  newEvent(event) {
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + 'events/newEvent', event, this.options).map(res => res.json());
  }


  getAllEvents(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'events/allEvents', this.options).map(res => res.json());
  }



  getSingleEvent(id){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'events/singleEvent/' + id, this.options).map(res => res.json());
  }

  editEvent(event){
    this.createAuthenticationHeaders();
    return this.http.put(this.domain + 'events/updateEvent/', event, this.options).map(res => res.json());
  }

  deleteEvent(id){
    this.createAuthenticationHeaders();
    return this.http.delete(this.domain + 'events/deleteEvent/' + id, this.options).map(res => res.json());
  }

}
