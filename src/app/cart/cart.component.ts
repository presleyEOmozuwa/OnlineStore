import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartModel, CourseModel, StoreData } from '../interfaces/product.interface';
import { CartService } from './cart.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ProductService } from '../products/product.service';
import { MessengerService } from '../messenger/messenger.service';
import { DecodeTokenService } from '../messenger/decode-token.service';
import { SubscriptionService } from '../messenger/subscription.service';
import { CounterService } from '../messenger/counter.service';
import { AlertService } from '@full-fledged/alerts';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id: string = null;
  data: any = null;
  cartModel: CartModel;
  itemCount: number = 0;
  helper = new JwtHelperService();
  constructor(private route: ActivatedRoute, private cartService: CartService, private productService: ProductService, private router: Router, private messenger: MessengerService, private decodeService: DecodeTokenService, private subService: SubscriptionService, private counterService: CounterService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.cartModel = {
      itemCount: 0,
      courses: null
    };
    this.getShoppingCart();
  }

  deCodeToken(): string
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    return decodedToken.nameid;
  }


  getShoppingCart()
  {
    
    this.id = this.deCodeToken();
    this.cartService.getCartItemsfromServer(this.id).subscribe(res => 
    {
      Object.assign(this.cartModel, res);
      this.itemCount = this.cartModel.itemCount;
    });
  }

  removeFromCart(courseId: string) {
    const isDecided: boolean = confirm("Are you sure you want to remove item from shopping cart?");
    if (isDecided) {
      this.id = this.deCodeToken();
      this.cartService.removeItemFromCart(this.id, courseId)
        .subscribe(res => {
          console.log(res);
          this.counterService.setCounter(res.result.itemCounter);
          this.getShoppingCart();
        });
    }

  }


  checkOut() {
    const selectedPriceIds: string[] = this.cartModel.courses.map((item: CourseModel) => item.priceId);
    this.cartService.requestSessionId(selectedPriceIds);
  }


  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    else {
      return false;
    }
  }


  subTotal(): number {
    let total: number = 0;
    if(this.cartModel.courses != null)
    {
      this.cartModel.courses.forEach(item => {
      return total += item.price;
      });
    }
    return total;
  }

}
