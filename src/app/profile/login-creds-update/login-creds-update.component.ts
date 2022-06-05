import { Component, OnInit } from '@angular/core';
import { IAppUser } from 'src/app/interfaces/appUser.interface';
import { DecodeTokenService } from 'src/app/messenger/decode-token.service';
import { ProfileService } from '../profile.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login-creds-update',
  templateUrl: './login-creds-update.component.html',
  styleUrls: ['./login-creds-update.component.css']
})
export class LoginCredsUpdateComponent implements OnInit {

  user: IAppUser;
  helper = new JwtHelperService();
  constructor(private profileService: ProfileService, private decodeService: DecodeTokenService) { }

  ngOnInit(): void {
    this.getUserFromDb()
  }

  getUserFromDb()
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    const id = decodedToken.nameid;
    this.profileService.getUserFromServer(id).subscribe(user =>
      {
          console.log(user);
          this.user = user
      });
  }

}
