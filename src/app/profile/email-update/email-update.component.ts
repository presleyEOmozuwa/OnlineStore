import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DecodeTokenService } from 'src/app/messenger/decode-token.service';
import { ProfileService } from '../profile.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-email-update',
  templateUrl: './email-update.component.html',
  styleUrls: ['./email-update.component.css']
})
export class EmailUpdateComponent implements OnInit {

  helper = new JwtHelperService();
  constructor(private router: Router, private profileService: ProfileService, private decodeService: DecodeTokenService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    const id = decodedToken.nameid;
    const email: string = f.value.email;
    this.profileService.updateEmail(id, email).subscribe(res =>
      {
        console.log(res);
        this.router.navigate(['/profile/login-details-update']);
        
      }, (error: any) => console.log(error));
  }

  goBack()
  {
      this.router.navigate(['/profile/login-details-update']);
  }

}
