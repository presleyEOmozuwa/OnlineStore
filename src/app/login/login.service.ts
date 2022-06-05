import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILoginData } from '../interfaces/login.interface';
import { JwtHelperService } from "@auth0/angular-jwt";
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { IUser } from '../interfaces/current.interface';



@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  dataFromServer: any
  helper = new JwtHelperService();
  loggedInUser: IUser = 
    {
      nameid: null,
      family_name: null,
      given_name: null,
      unique_name: null,
      email: null,
      isAuthenticated: null,
      isSubscriber: null,
      isExternalLogger: null,
      isEmailConfirmed: null
    }
    

  constructor(private httpClient: HttpClient, private socialService: SocialAuthService) { }
  
  login(credentials: ILoginData)
  {
    const loginUrl: string = "https://localhost:5001/api/loginuser/login";
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    
    return this.httpClient.post<any>(loginUrl, credentials, { headers: httpHeaders }).pipe(
      map((res: any) => 
      {
        localStorage.setItem('token', res.token.result);
        this.storeLogger(res);
        return this.loggedInUser;
      })
    );
  }

  storeLogger(val: any){
    const decodedToken = this.helper.decodeToken(val.token.result);
    this.loggedInUser.nameid = decodedToken.nameid;
    this.loggedInUser.family_name = decodedToken.family_name;
    this.loggedInUser.given_name = decodedToken.given_name;
    this.loggedInUser.unique_name = decodedToken.unique_name;
    this.loggedInUser.email = decodedToken.email;
    this.loggedInUser.isSubscriber = val.response.isSubscriber;
    this.loggedInUser.isAuthenticated = val.response.isAuthenticated;
    this.loggedInUser.isExternalLogger = val.response.isExternalLogger;
    this.loggedInUser.isEmailConfirmed = val.response.isEmailConfirmed;
  }

  sendGoogleTokenToServer(provider: string, idToken: string): Observable<any>
  {
    const baseUrl: string = "https://localhost:5001/api/external/externalLogger";
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const body = {
      provider: provider,
      idToken: idToken
    }
    return this.httpClient.post<any>(baseUrl, body, { headers: headers })
    .pipe(map((res: any) =>
    {
      localStorage.setItem('token', res.token.result);
      this.storeLogger(res);
      return this.loggedInUser;
    }));
  }

  signInWithGoogle() {
    return this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOutWithGoogle() {
    this.socialService.signOut();
  }


}