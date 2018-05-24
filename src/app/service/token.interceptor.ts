import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { UserInfoService } from './user-info.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public userInfo: UserInfoService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.userInfo.dapatkanToken() !== null) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userInfo.dapatkanToken()}`
      }
    });
  }
    return next.handle(request);
  }
}
