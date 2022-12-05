import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestService {
    
  constructor(private http:HttpClient) { }

  upload(file:any):Observable<any> {

      // Create form data
      const formData = new FormData();
          
      // Store form name as "file" with file data
      formData.append("file", file, file.name);

      var headers = new HttpHeaders().set('content-type', 'application/octet-stream');
      var headers1 = new HttpHeaders().set('X-RapidAPI-Key', '4868a7784emsh1526ff8e8f7fc54p11a703jsn8030bde13037');
      var headers2 = new HttpHeaders().set('X-RapidAPI-Host', 'pastin1.p.rapidapi.com');
      var headers3 = new HttpHeaders().set('useQueryString', 'true');

      const options = {
        "body": file,
        "headers": {'content-type':'application/octet-stream','X-RapidAPI-Key':'4868a7784emsh1526ff8e8f7fc54p11a703jsn8030bde13037','X-RapidAPI-Host':'pastin1.p.rapidapi.com','useQueryString':'true'},
      };
        
      // Make http post request over api
      // with formData as req
      
      return this.http.request('POST',"https://pastin1.p.rapidapi.com/upload", options );
  }
}
