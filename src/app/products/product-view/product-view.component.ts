import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CourseModel, Product } from 'src/app/interfaces/product.interface';
import { AppState } from 'src/app/store';
import * as fromProductSlicer from '../state/product.selectors';
import { ProductService } from '../product.service';
import { MessengerService } from 'src/app/messenger/messenger.service';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/app/cart/cart.service';
import { DecodeTokenService } from 'src/app/messenger/decode-token.service';
import { AlertService } from '@full-fledged/alerts';
import { JwtHelperService } from "@auth0/angular-jwt";
import { SubscriptionService } from 'src/app/messenger/subscription.service';
import { CounterService } from 'src/app/messenger/counter.service';
import { IUser } from 'src/app/interfaces/current.interface';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit 
{
  
  id: string = null;
  courseId: string = null;
  cartLength: number
  course: CourseModel;
  helper = new JwtHelperService();

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private productService: ProductService, private router: Router, private message: MessengerService, private decodeService: DecodeTokenService, private cartService: CartService, private alertService: AlertService, private subService: SubscriptionService, private counterService: CounterService) { }

  ngOnInit(): void {
    this.course = {
      courseId: null,
      courseName: null,
      priceId: null,
      price: 0,
      description: null,
      image: null
    }
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.getCourseModel();
  }

  /* getCourseFromStore()
  {
    this.productId = this.route.snapshot.queryParams['id'];
    this.store.pipe(select(fromProductSlicer.selectEntityById(this.productId))).subscribe(entityProduct =>
      {
        this.course = entityProduct;
      })
  } */

  getCourseModel() 
  {
    this.productService.getCourseById(this.courseId).subscribe(res => {
      Object.assign(this.course, res);
    });
  }

/* 
  addToCart(f: NgForm) 
  {
    if(!localStorage.getItem('token'))
    {
      this.alertService.danger("Login to continue...");
    }
    
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    this.id = decodedToken.nameid;
    const courseId: string = f.value.courseId;
    this.cartService.addItemToCart(this.id, courseId).subscribe(data => {
    
      if(data.result.alreadyAdded == true)
      {
        this.alertService.danger("Already exist in your shopping cart, it can only be added once.");
      }
      
      if(data.result.newlyAdded == true)
      {  
          this.counterService.setCounter(data.result.itemCounter);
          this.router.navigate(['/products/added-to-cart', data.result.addedCourseId])
      }
    });
  } */

 /*  addToCart(f: NgForm) 
  {
    if(!localStorage.getItem('token'))
    {
      this.alertService.danger("Login to continue...");
    }
    
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    this.id = decodedToken.nameid;
    const courseId: string = f.value.courseId;
    this.cartService.addItemToCart(this.id, courseId).subscribe(data => {
    
      if(data.result.alreadyAdded == true)
      {
        this.alertService.danger("Already exist in your shopping cart, it can only be added once.");
      }
      
      if(data.result.newlyAdded == true)
      {  
          this.counterService.setCounter(data.result.itemCounter);
          this.router.navigate(['/products/added-to-cart', data.result.addedCourseId])
      }
    });
  } */

  addToCart(f: NgForm) 
  {
    if(!localStorage.getItem('token'))
    {
      this.alertService.danger("Login to continue...");
    }
    
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    this.id = decodedToken.nameid;
    const courseId: string = f.value.courseId;
    this.cartService.addItemToCart(this.id, courseId).subscribe(data => {
      if(data.result.alreadyAdded == true)
      {
        this.alertService.danger("Already exist in your shopping cart, it can only be added once.");
      }
      
      if(data.result.newlyAdded == true)
      {  
          this.counterService.setCounter(data.result.itemCounter);
          this.router.navigate(['/products/added-to-cart', data.result.addedCourseId])
      }
    });
  }


  
  goToBuyNow(courseId: string) {
    this.router.navigate(['/order', courseId])
  }

  goToCourses() {
    this.router.navigate(['/products']);
  }

    goToCart() {
      this.router.navigate(['/cart-list']);
    }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    else {
      false;
    }
  }

}
