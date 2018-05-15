import { Injectable } from '@angular/core';
import { Pegawai } from '../../model/master/pegawai';

import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PegawaiService {

    private url = 'http://localhost:11011/a/p';

    constructor(private http: HttpClient) {}

    dapatkanSemua(): Observable<Pegawai[]> {
        return this.http.get(this.url)
            .map((res) => {
                return res;
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server Side Error'));
    }
}
