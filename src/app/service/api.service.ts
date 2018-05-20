import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest,  HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {}

    get(url: string): Observable<any> {
        return this.http.get(url)
            .map((resp) => {
                return resp;
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server Side Error'));
    }

    getResponseStatusCode(url: string): Observable<any> {
        return this.http.get(url, {observe: 'response'})
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

}
