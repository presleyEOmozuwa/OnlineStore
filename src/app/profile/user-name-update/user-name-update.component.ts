import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DecodeTokenService } from 'src/app/messenger/decode-token.service';
import { ProfileService } from '../profile.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-user-name-update',
  templateUrl: './user-name-update.component.html',
  styleUrls: ['./user-name-update.component.css']
})
export class UserNameUpdateComponent implements OnInit {

  helper = new JwtHelperService();
  constructor(private router: Router, private profileService: ProfileService, private decodeService: DecodeTokenService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    const id = decodedToken.nameid;
    const username = f.value.userName
    this.profileService.updateUserName(id, username).subscribe(res =>
      {
        console.log(res);
        this.router.navigate(['/profile/personal-details-update'])
        
      }, (error: any) => console.log(error));
  }

  goBack()
  {
      this.router.navigate(['/profile/personal-details-update']);
  }

}
