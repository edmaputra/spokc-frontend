import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserInfoService } from '../../service/user-info.service'


const clientId = 'SILK-RSDARA-KOBA-CLIENT';
const secretKey = 'spring-security-oauth2-read-client-password1234';
const basicAuth = btoa(clientId + ':' + secretKey);

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + basicAuth })
};

@Injectable()
export class LoginService {

  errMsg: string = '';

  public token: string;
  private tokenUrl = 'http://localhost:11011/oauth/token';

  constructor(private http: HttpClient, private userInfoService: UserInfoService) {}

  tokenKey(): Observable<boolean> {
    const url = 'http://localhost:11011/oauth/token_key';
    const he = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
    };
        return this.http.get(url)
            .map((response: Response) => {
              console.log(response);
              return true;
            });
  }

  login(username: string, password: string): Observable<boolean> {
      const url = 'http://localhost:11011/oauth/token?grant_type=password&username=' + username + '&password=' + password;

      return this.http.post(url, null, httpOptions)
      .map((res: Response) => {
        this.userInfoService.simpanUserInfo(JSON.stringify(res));
        return true;
      }, (err) => {
        console.log(err.name + 'dd');
        switch (err.status) {
          case 401:
            this.errMsg = 'Username or password is incorrect';
            break;
          case 404:
            this.errMsg = 'Service not found';
            break;
          case 408:
            this.errMsg = 'Request Timedout';
            break;
          case 500:
            this.errMsg = 'Internal Server Error';
            break;
          default:
            this.errMsg = 'Server Error';
        }
      });
  }

    logout() {
        this.userInfoService.hapusUserInfo();
    }
}
