import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IResetPassword } from 'src/app/interfaces/reset-password.interface';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private securityService: SecurityService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
    
        const token: string = this.route.snapshot.queryParams['token'];
        const id: string = this.route.snapshot.queryParams['id'];
        const password: string = f.value.password;
        const confirmPassword: string = f.value.confirmPassword;

        console.log(token);
        console.log(id);
        console.log(password);
        console.log(confirmPassword);
    
    this.securityService.sendResetPasswordCreds(token, id, password, confirmPassword).subscribe(res =>
      {
        console.log(res.Message);
        this.router.navigate(['/login']);
      
      }, (error: any) =>
      {
        console.log(error);
      })
  
  }

}
