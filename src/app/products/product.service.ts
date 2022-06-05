import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{

  constructor(private httpClient: HttpClient) { }

  getAllProducts(url: string)
  {
    return this.httpClient.get<any>(url);
  }

  getCourseById(courseId: string)
  {
      const url: string = "https://localhost:5001/api/course/getById/" + courseId;
      return this.httpClient.get<any>(url);
  }

  
  getHttpOptions() 
  {
    const httpOptions = 
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },)
    };
    
    return httpOptions;
  }

}
