import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecurityRoutingModule } from './security-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AlertEmailConfirmationComponent } from './alert-email-confirmation/alert-email-confirmation.component';
import { AlertResetPasswordComponent } from './alert-reset-password/alert-reset-password.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AlertEmailConfirmationComponent,
    AlertResetPasswordComponent,
    EmailConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
