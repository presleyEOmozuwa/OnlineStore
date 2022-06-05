import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  
  public subject = new Subject<string>();

  constructor(private router: Router) { }

  sendMsg(courseId: string)
  {   
      this.subject.next(courseId);
  }

  getMessage()
  {
    return this.subject.asObservable();
  }

}
