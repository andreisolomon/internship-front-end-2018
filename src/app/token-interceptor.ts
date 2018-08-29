import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) { }

  // private authReq

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({ headers: req.headers.set('token', this.authService.getToken() || '')});

    // send the newly created request
    return next.handle(authReq)
      .catch((error, caught) => {
        // intercept the respons error and displace it to the console
        console.log('Error Occurred');
        /*if (error.error.success === false) {
          console.log(error.error.success);
          localStorage.clear();
          //this.router.navigate(['login']);
        }*/
        // return the error to the method that called it
        return Observable.throw(error);
      }) as any;
  }

}
