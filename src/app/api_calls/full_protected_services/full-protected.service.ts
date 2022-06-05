import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FullProtectedService 
{
  
  constructor(private httpClient: HttpClient) { }
  
  getManagersDeveloper()
  {
    const managerUrl: string = "https://localhost:5001/api/user/managerdevelopers";
    return this.httpClient.get(managerUrl, this.getTokenOptions());
  }

  getAdminDeveloper(): any
  {
    const adminUrl: string = "https://localhost:5001/api/user/admindevelopers";
    return this.httpClient.get(adminUrl, this.getTokenOptions());
  }

  getTokenOptions()
  {
      const options = 
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };

      return options;
  }

}
