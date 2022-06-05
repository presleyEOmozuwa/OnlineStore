import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ISession } from '../interfaces/session.interface';

declare const Stripe: any;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient, private router: Router) { }

  requestSessionId(priceId: string): void
  {
  
    const body: any = 
    {
      priceId: priceId,
      successUrl: environment.successUrl,
      failureUrl: environment.failureUrl
    }
      this.httpClient.post<any>(this.baseUrl + 'api/singleitempayment/create-checkout-session', body, this.getHttpOptions()).subscribe(session =>
      {
        this.redirectToCheckout(session);
      }, (error:any) =>
      {
        console.log(error);
      })
  }

  redirectToCheckout(session: ISession) 
  {
    const stripe = Stripe(session.publicKey);

    stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });
  }

  getHttpOptions() 
  {
    const httpOptions = 
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
    
    return httpOptions;
  }
}
