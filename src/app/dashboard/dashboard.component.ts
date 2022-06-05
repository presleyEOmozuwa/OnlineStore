import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import * as fromLogin from '../store/actions/login.actions';
import { JwtHelperService } from "@auth0/angular-jwt";
import { IUser } from '../interfaces/current.interface';
import { DecodeTokenService } from '../messenger/decode-token.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  helper = new JwtHelperService();
  constructor(private store: Store<AppState>, private decodeService: DecodeTokenService, private loginService: LoginService) { }

  ngOnInit(): void {
    /* this.dashboardReload(); */
    /*  const decodedToken = this.helper.decodeToken(localStorage.getItem('token')); */
    /*  const user: IUser = {
       nameid: decodedToken.nameid,
       unique_name: decodedToken.unique_name,
       given_name: decodedToken.given_name,
       email: decodedToken.email,
       isAuthenticated: true,
       hasSubscribed: true
     }
     
     if(user)
     {
       this.store.dispatch(fromLogin.dashboardReload({user: user}));
     } */
  }


 /*  dashboardReload() 
  {
    const logger: IUser = {
      nameid: this.decodeService.decodeTokenAsId(),
      email: this.decodeService.decodeTokenAsEmail(),
      family_name: this.decodeService.decodeTokenAsFamilyName(),
      unique_name: this.decodeService.decodeTokenAsUniqueName(),
      given_name: this.decodeService.decodeTokenAsUserName(),
      isAuthenticated: true,
      isEmailConfirmed: true,
      isExternalLogger: true,
      isSubscriber: false
    }
    this.store.dispatch(fromLogin.authLinksReload({ user: logger }));
  } */

}
