import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  domain = "http://localhost:8080/";
  authToken;
  user;
  options;

  constructor(
    private http: Http
  ) { }

  createAuthenticationHeaders() {
    this.loadToken(),
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    })
  }

  loadToken(){
    const token = localStorage.getItem('token');
    this.authToken = token;
  }


  registerUser(user) {
    return this.http.post(this.domain + 'admineditorarea/register', user).map(res => res.json());
  }

  checkUsername(username) {
    return this.http.get(this.domain + 'admineditorarea/checkUsername/' + username).map(res => res.json());
  }


  checkEmail(email) {
    return this.http.get(this.domain + 'admineditorarea/checkEmail/' + email).map(res => res.json());
  }


  login(user){
    return this.http.post(this.domain + 'admineditorarea/authentication', user).map(res => res.json());
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  storeUserData(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'admineditorarea/profile', this.options).map(res => res.json());
  }

  loggedIn(){
    return tokenNotExpired();
  }


}
