import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SecurityService 
{

  constructor(private httpClient: HttpClient) { }

    sendForgotPasswordCreds(email: string, lastName: string)
    {
        const url: string = "https://localhost:5001/api/security/forgotpassword";
        const body = {
          email: email,
          lastName: lastName
        }
        return this.httpClient.post<any>(url, body);
    }

    sendResetPasswordCreds(token: string, id: string, password: string, confirmPassword: string)
    {
      const url: string = "https://localhost:5001/api/security/resetpassword";
      const body = 
      {
        token: token,
        id: id,
        password: password,
        confirmPassword: confirmPassword
      }
      return this.httpClient.post<any>(url, body);
    }
    
    sendConfirmEmail(token: string, id: string): Observable<any>
    {
      const body = {
        token: token,
        id: id
      }
      return this.httpClient.post<any>(environment.baseUrl + 'api/security/confirmemail', body);
    }

}
