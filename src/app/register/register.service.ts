import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRegisterUser } from 'src/app/interfaces/register-user.interfaces';
import { IEmailConfirmation } from '../interfaces/email-confirmation.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService 
{
  constructor(private httpClient: HttpClient) { }

  register(userData: IRegisterUser)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post<any>(environment.baseUrl + 'api/registeruser/register', userData, { headers: headers });
  }
}
