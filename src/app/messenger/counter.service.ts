import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  public subject = new BehaviorSubject<number>(0);

  constructor() { }

  setCounter(counter: number)
  {  
      this.subject.next(counter);
  }

  getCounter()
  {
    return this.subject.asObservable();
  }

}