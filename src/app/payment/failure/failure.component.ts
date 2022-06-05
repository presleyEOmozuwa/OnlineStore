import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/interfaces/product.interface';
import { MessengerService } from 'src/app/messenger/messenger.service';
import { SubscriptionService } from 'src/app/messenger/subscription.service';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent implements OnInit {

  itemCount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
