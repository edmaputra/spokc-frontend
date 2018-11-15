import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { ErrorHandlerService } from './error-handler.service';
import { Response } from '../model/response';

@Injectable()
export class ApiService {

  private response: Response;

  constructor(
    private http: HttpClient,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) { }

  get(url: string): Observable<any> {
    return this.http.get(url)
      .map((resp) => {
        return resp;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server Side Error'));
  }

  getPageable(url: string, page: string, size: string, search: string): Observable<any> {
    const params = new HttpParams().set('page', page).set('size', size).set('search', search);
    return this.http.get(url, { headers: null, params: params })
      .map((res) => {
        return res;
      }).catch((err: HttpErrorResponse) => this.errorHandler.handleError(err));
  }

  getCari(url: string, cari: string): Observable<any> {
    const params = new HttpParams().set('c', cari);
    return this.http.get(url, { headers: null, params: params })
      .map((resp) => {
        return resp;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server Side Error'));
  }

  getRekonsiliasiAtm(url: string, atm: string, date: string): Observable<any> {
    const params = new HttpParams().set('atm', atm).set('date', date);
    return this.http.get(url, { headers: null, params: params })
      .map((resp) => {
        return resp;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server Side Error'));
  }

  getResponseStatusCode(url: string): Observable<any> {
    return this.http.get(url, { observe: 'response' })
      .map((resp) => {
        return resp;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server Side Error'));
  }

  gets(url: string, urlParams?: any): Observable<any> {
    return this.http.get(url, urlParams)
      .map((resp) => {
        return resp;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server Side Error'));
  }

  post(url: string, body: Object) {
    this.http.post(url, body)
      .subscribe((val) => {
        console.log('POST call successful value returned in body', val);
      },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
  }

  postObservable(url: string, body: Object): Observable<any> {
    return this.http.post(url, body)
      .map((res) => {
        return res;
      }).catch((err: HttpErrorResponse) => this.errorHandler.handleError(err));
  }

  put(url: string, body: Object) {
    this.http.put(url, body)
      .subscribe((val) => {
        console.log('PUT call successful value returned in body', val);
      },
        response => {
          console.log('PUT call in error', response);
        },
        () => {
          console.log('The PUT observable is now completed.');
        });
  }

  putObservable(url: string, body: Object): Observable<any> {
    return this.http.put(url, body)
      .map((res) => {
        return res;
      }).catch((err: HttpErrorResponse) => this.errorHandler.handleError(err));
  }

  delete(url: string) {
    this.http.delete(url)
      .subscribe((val) => {
        console.log('DELETE call successful value returned in body', val);
      },
        response => {
          console.log('DELETE call in error', response);
        },
        () => {
          console.log('The DELETE observable is now completed.');
        });
  }

  deleteObservable(url: string): Observable<any> {
    return this.http.delete(url)
      .map((res) => {
        return res;
      }).catch((err: HttpErrorResponse) => this.errorHandler.handleError(err));
  }

}
