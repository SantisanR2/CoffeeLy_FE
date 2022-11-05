import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http:  HttpClient) { }

  login(payload: any) : any{
    return this.http.post<any>(`${environment.app}/login/`,payload)
  }

  register(payload: any){
    return this.http.post<any>(`${environment.app}/user/`,payload)
  }

  public get(url:string)
  {
    return this.http.get(environment.app + url);
  }

  public get_token(url:string, token:string)
  {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get((environment.app + url), { headers: headers });
  }
}
