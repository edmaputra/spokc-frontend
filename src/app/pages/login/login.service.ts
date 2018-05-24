import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Token } from '../../model/user/token';
import { UserInfoService } from '../../service/user-info.service';
import { ErrorHandlerService } from '../../service/error-handler.service';

const clientId = 'SPOKC-WEBCLIENT';
const secretKey = 'spring-security-oauth2-read-client-password1234';
const basicAuth = btoa(clientId + ':' + secretKey);

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + basicAuth })
};

@Injectable()
export class LoginService {

  public token: string;
  private tokenUrl = 'http://localhost:9292/oauth/token';

  constructor(private http: HttpClient, private userInfoService: UserInfoService, private errorHandler: ErrorHandlerService) {}

  login(username: string, password: string): Observable<boolean> {
    const params = new HttpParams().set('username', username).set('password', password).set('grant_type', 'password');

    return this.http.post(this.tokenUrl, params, httpOptions)
      .map((res: Token) => {
        this.userInfoService.simpanUserInfo(res.access_token);
        return true;
      }).catch((err: HttpErrorResponse) => this.errorHandler.handleError(err));
  }

    logout() {
        this.userInfoService.hapusUserInfo();
    }
}
