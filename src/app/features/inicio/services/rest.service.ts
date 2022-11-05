import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  public get(url:string)
  {
    return this.http.get(environment.app + url);
  }

  public get_token(url:string, token:string)
  {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get((environment.app + url), { headers: headers });
  }
  
  public delete(url:string)
  {
    return this.http.delete(environment.app + url);
  }
}
