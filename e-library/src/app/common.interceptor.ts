import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const api='lopik'
    // return next.handle(request.clone({setHeaders:{api}}));
    let token=localStorage.getItem('jwt')
    console.log(request);
    request=request.clone({headers:request.headers.append('content-type','application/json')})
    request=request.clone({headers:request.headers.set('authorization','Dearer'+token)})
    return next.handle(request);
  }
}
