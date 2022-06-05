import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartModel } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  public behSubject$ = new BehaviorSubject<CartModel>(null);
  constructor() { }

  setData(data: CartModel)
  {
    this.behSubject$.next(data);
  }

  getData()
  {
    return this.behSubject$.asObservable();
  }
}
