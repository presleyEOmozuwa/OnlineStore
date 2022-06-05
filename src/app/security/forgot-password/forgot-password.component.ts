import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IForgotPassword } from 'src/app/interfaces/forgotpassword-interface';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  constructor(private securityService: SecurityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
    const email: string = f.value.email;
    const lastName: string = f.value.lastName; 

    console.log(email);
    console.log(lastName);
    this.securityService.sendForgotPasswordCreds(email, lastName).subscribe(res =>
      {
        console.log(res.Message);
        this.router.navigate(['/security/alert-reset-password']);
      })
  }

}