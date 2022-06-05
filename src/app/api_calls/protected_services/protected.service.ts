import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectedService 
{

  constructor(private httpClient: HttpClient) { }

  getAllNames(): Observable<string[]>
  {
    const namesUrl: string = "https://localhost:5001/api/user/test";

    return this.httpClient.get<string[]>(namesUrl, this.getTokenOptions());
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
