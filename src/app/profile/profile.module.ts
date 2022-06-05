import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidateEqualModule } from  'ng-validate-equal';

import { ProfileRoutingModule } from './profile-routing.module';
import { PersonalDataUpdateComponent } from './personal-data-update/personal-data-update.component';
import { LoginCredsUpdateComponent } from './login-creds-update/login-creds-update.component';
import { FirstNameUpdateComponent } from './first-name-update/first-name-update.component';
import { LastNameUpdateComponent } from './last-name-update/last-name-update.component';
import { UserNameUpdateComponent } from './user-name-update/user-name-update.component';
import { EmailUpdateComponent } from './email-update/email-update.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { AlertChangePasswordComponent } from './alert-change-password/alert-change-password.component';


@NgModule({
  declarations: [
    PersonalDataUpdateComponent,
    LoginCredsUpdateComponent,
    FirstNameUpdateComponent,
    LastNameUpdateComponent,
    UserNameUpdateComponent,
    EmailUpdateComponent,
    PasswordUpdateComponent,
    AlertChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    ValidateEqualModule
  ]
})
export class ProfileModule { }
