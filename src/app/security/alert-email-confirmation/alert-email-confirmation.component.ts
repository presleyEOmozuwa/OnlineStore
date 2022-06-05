import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-alert-email-confirmation',
  templateUrl: './alert-email-confirmation.component.html',
  styleUrls: ['./alert-email-confirmation.component.css']
})
export class AlertEmailConfirmationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private securityService: SecurityService) { }

  ngOnInit(): void {
    
  }


}
