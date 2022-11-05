import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const request = req.clone();

      return next.handle(request).pipe(
        retry(1),
        catchError((err: HttpErrorResponse) => {
  
          if (err.status === 401) {
            localStorage.clear();
            alert("Vuelva a iniciar sesión");
            if(this.router.url == '/login/login' || this.router.url == '/'){
            }else{
              this.router.navigate(['/login/login']).then(this.refresh); 
            }
            
          }
  
          return throwError( err );
  
        })
      );
    }

    refresh(){
      window.location.reload();
    }
    
}
