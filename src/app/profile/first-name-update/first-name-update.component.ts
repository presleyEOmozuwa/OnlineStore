import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DecodeTokenService } from 'src/app/messenger/decode-token.service';
import { ProfileService } from '../profile.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-first-name-update',
  templateUrl: './first-name-update.component.html',
  styleUrls: ['./first-name-update.component.css']
})
export class FirstNameUpdateComponent implements OnInit {

  helper = new JwtHelperService();
  constructor(private router: Router, private profileService: ProfileService, private decodeService: DecodeTokenService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    const id = decodedToken.nameid;
    const firstname = f.value.firstName
    console.log(firstname)
    this.profileService.updateFirstName(id, firstname).subscribe(res =>
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
