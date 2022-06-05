import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import * as fromLoginSelector from '../store/selectors/login.selectors';
import * as fromLogin from '../store/actions/login.actions';
import { JwtHelperService } from "@auth0/angular-jwt";
import { LoginService } from '../login/login.service';
import { CartService } from '../cart/cart.service';
import { environment } from '../../environments/environment';
import { DecodeTokenService } from '../messenger/decode-token.service';
import { AlertService } from '@full-fledged/alerts';
import { SubscriptionService } from '../messenger/subscription.service';
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { CounterService } from '../messenger/counter.service';
import { IUser } from '../interfaces/current.interface';


@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.css']
})

export class AuthLinksComponent implements OnInit 
{
  
  vm: any;
  courseCount: number = 0;
  authUser: IUser = null
  unique_name: string = null;
  helper = new JwtHelperService();

  constructor(private store: Store<AppState>, public loginService: LoginService, public cartService: CartService, private decodeService: DecodeTokenService, private subService: SubscriptionService, private socialService: SocialAuthService, private router: Router, private counterService: CounterService) { }

  ngOnInit(): void 
  {
    this.loginResponseData();
    this.authReload();
    this.getCount();
  }

  authReload()
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
    this.store.dispatch(fromLogin.authLinksReload({user:logger}));
  }


  loginResponseData(){
      this.store.pipe(select(fromLoginSelector.selectLinksModel)).subscribe(data => this.vm = data);
  }

  logout() 
  {
      if(this.vm.externalLogger == false)
      {
        this.store.dispatch(fromLogin.logOut());
        this.router.navigate(['/']);
      }
      else
      {
        this.store.dispatch(fromLogin.logOut());
        this.socialService.signOut();
        this.router.navigate(['/payment/success']);
      }
  }

/*   logout() 
  {
      if(this.loginService.loggedInUser.isExternalLogger == false)
      {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      }
      else
      {
        localStorage.removeItem('token');
        this.socialService.signOut();
        this.router.navigate(['/payment/success']);
      }
  } */


  
  goToPortal()
  {   
      const returnUrl: string = `${environment.returnUrl}`;
      this.cartService.redirectToCustomerPortal(returnUrl);
  } 

  /* isLoggedIn(): boolean
  {
    if(localStorage.getItem('token'))
    {
      return true;
    }
    else
    {
      return false;
    }
  } */


  getCount() 
  {
      this.counterService.getCounter().subscribe(storeCount => 
        {
          console.log(storeCount)
          this.courseCount = storeCount;
        });
  }
  
  


 /*  displayFirstName(): string
  {
    this.unique_name = this.decodeService.decodeTokenAsUniqueName();
    return this.unique_name;
  } */

}
