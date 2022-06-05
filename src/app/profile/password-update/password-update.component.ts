import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DecodeTokenService } from 'src/app/messenger/decode-token.service';
import { ProfileService } from '../profile.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {

  helper = new JwtHelperService();
  constructor(private router: Router, private decodeService: DecodeTokenService, private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    const id = decodedToken.nameid;
    const currentPassword: string = f.value.cpassword;
    const newPassword: string = f.value.password;
    const confirmPassword: string = f.value.confirmPassword;
    this.profileService.ChangePassword(id, currentPassword, newPassword, confirmPassword).subscribe(res => 
      {
        console.log(res);
        this.router.navigate(['/profile/alert-change-password']);
      })
  }

  goBack()
  {
      this.router.navigate(['/profile/login-details-update']);
  }

}
