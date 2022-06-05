import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getUserFromServer(id: string) {
    const userUrl: string = `https://localhost:5001/api/appuser/users/${id}`;
    return this.httpClient.get<any>(userUrl, this.getHttpOptions());
  }


  updateFirstName(id: string, firstname: string)
  {
      const url: string = "https://localhost:5001/api/appuser/firstname-update";
      const body = {
        id: id,
        firstname: firstname
      }
      return this.httpClient.post<any>(url, body, this.getHttpOptions());
  }

  updateLastName(id: string, lastname: string)
  {
      const url: string = "https://localhost:5001/api/appuser/lastname-update";
      const body = {
        id: id,
        lastname: lastname
      }
      return this.httpClient.post<any>(url, body, this.getHttpOptions());
  }

  updateUserName(id: string, username: string)
  {
      const url: string = "https://localhost:5001/api/appuser/username-update";
      const body = {
        id: id,
        username: username
      }
      return this.httpClient.post<any>(url, body, this.getHttpOptions());
  }

  updateEmail(id: string, email: string)
  {
      const url: string = "https://localhost:5001/api/appuser/email-update";
      const body = {
        id: id,
        email: email
      }
      return this.httpClient.post<any>(url, body, this.getHttpOptions());
  }

  ChangePassword(id: string, currentPassword: string, newPassword: string, confirmPassword: string)
  {
      const url: string = "https://localhost:5001/api/appuser/password-change";
      const body = {
        id: id,
        passwordhash: currentPassword,
        password: newPassword,
        confirmpassword: confirmPassword
      }
      return this.httpClient.post<any>(url, body, this.getHttpOptions());
  }

  getHttpOptions() {
    const httpOptions =
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };

    return httpOptions;
  }

}
