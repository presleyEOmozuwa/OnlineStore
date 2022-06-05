import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';

const routes: Routes = [
  { path: 'success', component: SuccessComponent },
  { path: 'failure', component: FailureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
