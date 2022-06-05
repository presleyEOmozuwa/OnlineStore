import { Component, OnInit } from '@angular/core';
import { IAppUser } from 'src/app/interfaces/appUser.interface';
import { ProfileService } from '../profile.service';
import { DecodeTokenService } from 'src/app/messenger/decode-token.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-personal-data-update',
  templateUrl: './personal-data-update.component.html',
  styleUrls: ['./personal-data-update.component.css']
})
export class PersonalDataUpdateComponent implements OnInit {

  user: IAppUser;
  helper = new JwtHelperService();
  constructor(private profileService: ProfileService, private decodeService: DecodeTokenService) { }

  ngOnInit(): void {
    this.getAppUser();
  }

  getAppUser()
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    const id = decodedToken.nameid;
    this.profileService.getUserFromServer(id).subscribe(res =>
      {
          this.user = res;
      });
  }
}
