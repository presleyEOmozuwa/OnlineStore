import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyProtectionRoutingModule } from './company-protection-routing.module';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    TermsOfServiceComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    CompanyProtectionRoutingModule
  ]
})
export class CompanyProtectionModule { }
