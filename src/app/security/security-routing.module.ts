import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { AlertEmailConfirmationComponent } from './alert-email-confirmation/alert-email-confirmation.component';
import { AlertResetPasswordComponent } from './alert-reset-password/alert-reset-password.component';


const routes: Routes = [
  { path: 'alert-email-confirmation', component: AlertEmailConfirmationComponent },
  { path: 'alert-reset-password', component: AlertResetPasswordComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
