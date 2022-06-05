import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, share, switchMap, throttle, throttleTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICartResponse } from '../interfaces/addtocart-res-interface';
import { ISession } from '../interfaces/session.interface';

declare const Stripe: any;

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  private baseUrl: string = environment.baseUrl;
  model: ICartResponse = {
    addedCourseId: null,
    removedCourseId: null,
    newlyAdded: null,
    alreadyAdded: null,
    isdoneAdded: null,
    isdoneRemoved: null,
    itemCounter: 0,
    message: null
  }
  
  
  constructor(private httpClient: HttpClient) { }
  
  getCartItemsfromServer(id: string)
  {
    const url: string = `https://localhost:5001/api/cartstore/cart/${id}`;
    return this.httpClient.get<any>(url, this.getHttpOptions())
  };

  
  addItemToCart( id: string, courseId: string )
  {
      const url: string = "https://localhost:5001/api/cartstore/addtocart";
      const body = {
        id: id,
        courseId: courseId
      }
      return this.httpClient.post<any>(url, body, this.getHttpOptions());
  };

  wrapper(res: any){
    this.model.addedCourseId = res.result.addedCourseId;
    this.model.alreadyAdded = res.result.alreadyAdded;
    this.model.isdoneAdded = res.result.isdoneAdded;
    this.model.isdoneRemoved = res.result.isdoneRemoved;
    this.model.itemCounter = res.result.itemCounter;
    this.model.message = res.result.message;
    this.model.newlyAdded = res.result.newlyAdded;
    this.model.removedCourseId = res.result.removedCourseId;
  }


  removeItemFromCart(id: string, courseId: string)
  {
      const url: string = "https://localhost:5001/api/cartstore/removefromcart";
      const body = {
        id: id,
        courseId: courseId
      }
      return this.httpClient.post<any>(url, body, this.getHttpOptions());
  };



  requestSessionId(selectedPriceIds: string[]): void
  {
  
    const body: any = 
    {
      priceIds: selectedPriceIds,
      successUrl: environment.successUrl,
      failureUrl: environment.failureUrl
    }
      this.httpClient.post<any>(this.baseUrl + 'api/multipleitempayment/create-checkout-session', body, this.getHttpOptions()).subscribe(session =>
      {
        this.redirectToCheckout(session);
      }, (error:any) =>
      {
        console.log(error);
      })
  };

  redirectToCheckout(session: ISession) 
  {
    const stripe = Stripe(session.publicKey);

    stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });
  };

  redirectToCustomerPortal(returnUrl: string)
  {
    const portalUrl: string = "https://localhost:5001/api/portal/customer-portal";
    const body: any = 
    {
      returnUrl: returnUrl
    }
    this.httpClient
      .post<any>(
        portalUrl,
        body,
        this.getHttpOptions()
      ).subscribe((data) => 
      {
        window.location.href = data.url;
      });
  }; 

  getHttpOptions() 
  {
    const httpOptions = 
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },)
    };
    
    return httpOptions;
  }
}
