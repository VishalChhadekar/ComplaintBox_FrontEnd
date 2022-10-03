import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8999/authenticate';
  constructor(private httpClient: HttpClient) { }

  proceedLogin(user: any) {
    return this.httpClient.post(this.url, user);
  }

  register(user: any){
    return this.httpClient.post('http://localhost:8999/register', user);
  }


  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    console.log("Getting token from localStorage: " + localStorage.getItem('token'));
    return localStorage.getItem('token') || '';
  }

  HaveAccess() {
    var loggintoken = localStorage.getItem('token') || '';
    var _extractedtoken = loggintoken.split('.')[1]; 
    var _atobdata = atob(_extractedtoken);
    var _finaldata = JSON.parse(_atobdata);
    
    console.log("Role: " + _finaldata.sub);
    if (_finaldata.sub == 'manager') {
      return true
    } else {
      alert('you not having access');
      return false
    }
  }
  // Buffer: { from: (arg0: string, arg1: string) => string; } | '';


  getRole(): any{
    var loggintoken = localStorage.getItem('token') || '';
    var _extractedtoken = loggintoken.split('.')[1];
    // var _atobdata = atob(_extractedtoken); //as atob: is deprecated: we are using Buffer.from
    var _atobdata = Buffer.from(_extractedtoken, 'base64');
    // let communicationInformation = JSON.parse(newCommunication.content.toString());
    var _finaldata = JSON.parse(_atobdata.toString());
    return _finaldata.sub;
    // console.log("Buffer: "+ JSON.parse(Buffer.from(loggintoken.split('.')[1],"base64")));
    // // return JSON.parse(Buffer.from(loggintoken.split('.')[1],"base64"));
  }
}
