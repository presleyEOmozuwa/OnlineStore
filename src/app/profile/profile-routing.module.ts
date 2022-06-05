import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDataUpdateComponent } from './personal-data-update/personal-data-update.component';
import { LoginCredsUpdateComponent } from './login-creds-update/login-creds-update.component';
import { FirstNameUpdateComponent } from './first-name-update/first-name-update.component';
import { LastNameUpdateComponent } from './last-name-update/last-name-update.component';
import { UserNameUpdateComponent } from './user-name-update/user-name-update.component';
import { EmailUpdateComponent } from './email-update/email-update.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { AlertChangePasswordComponent } from './alert-change-password/alert-change-password.component';

const routes: Routes = [
  { path: 'personal-details-update', component: PersonalDataUpdateComponent },
  { path: 'login-details-update', component: LoginCredsUpdateComponent },
  { path: 'first-name-update', component: FirstNameUpdateComponent },
  { path: 'last-name-update', component: LastNameUpdateComponent  },
  { path: 'user-name-update', component: UserNameUpdateComponent },
  { path: 'email-update', component: EmailUpdateComponent  },
  { path: 'password-update', component: PasswordUpdateComponent },
  { path: 'alert-change-password', component: AlertChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
