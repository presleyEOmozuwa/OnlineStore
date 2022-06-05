import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { HttpErrorInterceptor } from '../app/http-error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { AlertModule } from '@full-fledged/alerts';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from './store/effects/register.effects';
import { SpinnerEffects } from './store/effects/spinner.effects';
import { AlertEffects } from './store/effects/alert.effects';
import { LoginEffects } from './store/effects/login.effects'
import * as fromLogin from './store/reducers/login.reducer';
import { RouteEffects } from './store/effects/route.effects';
import { AppEffects } from './store/effects/app.effects';
import { AuthGuard } from './route-protector/auth.guard';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './Layout/header/header.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthButtonsComponent } from './auth-buttons/auth-buttons.component';
import { AuthLinksComponent } from './auth-links/auth-links.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BusinessComponent } from './business/business.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentComponent } from './payment/payment.component';
import { SecurityComponent } from './security/security.component';
import { CompanyProtectionComponent } from './company-protection/company-protection.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    AuthButtonsComponent,
    AuthLinksComponent,
    ProfileComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    BusinessComponent,
    BlogComponent,
    DashboardComponent,
    ProductsComponent,
    CartComponent,
    CartWidgetComponent,
    OrderSummaryComponent,
    PaymentComponent,
    SecurityComponent,
    CompanyProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers,
    {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([RegisterEffects, SpinnerEffects, AlertEffects, LoginEffects, RouteEffects, AppEffects]),
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer),
    StoreRouterConnectingModule.forRoot()
   /*  EffectsModule.forFeature([LoginEffects]) */
  ],
  
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: 
      {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1077128966156-attkcbvvthfeuvat7uc7oskbiovkkolo.apps.googleusercontent.com'
            )
          },
        ],
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }