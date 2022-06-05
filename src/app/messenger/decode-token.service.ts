import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class DecodeTokenService {

  helper = new JwtHelperService();
  constructor(private router: Router) { }

  decodeTokenAsId(): any
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    return decodedToken.nameid;
  } 
  
  decodeTokenAsEmail(): string
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    return decodedToken.email;
  }

  decodeTokenAsUniqueName(): string
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    return decodedToken.unique_name;
  }

  decodeTokenAsFamilyName(): string
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    return decodedToken.family_name;
  }

  decodeTokenAsUserName(): string
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    return decodedToken.given_name;
  }

}
