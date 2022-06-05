import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.emailConfirmationCredentials();
  }

  emailConfirmationCredentials()
  {
    const token: string = this.route.snapshot.queryParams['token'];
    const id: string = this.route.snapshot.queryParams['id'];
    this.securityService.sendConfirmEmail(token, id).subscribe(result =>
      {
          console.log(result);
          this.router.navigate(['/login']);
      }, error =>
      {
        console.log(error);
      });
  }

}
