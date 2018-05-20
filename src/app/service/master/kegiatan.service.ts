import { Injectable } from '@angular/core';
import { Kegiatan } from '../../model/master/kegiatan';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ApiService } from '../../service/api.service';

@Injectable()
export class KegiatanService {

    private url = 'http://localhost:11011/a/kp/';
    private kegiatan: Kegiatan;

    constructor(private http: HttpClient, private api: ApiService) {}

    setUnit(kegiatan: Kegiatan) {
        this.kegiatan = kegiatan;
    }

    getUnit(): Kegiatan {
        return this.kegiatan;
    }

    dapatkanSemua(): Observable<Kegiatan[]> {
        return this.api.get(this.url);
    }

    dapatkan(id) {
        const urlid = this.url + id;
        return this.api.get(urlid);
    }

    isExist(id) {
        const urlid = this.url + id;
        const statusCode = this.api.getResponseStatusCode(urlid).subscribe(
        (res: HttpResponse<Kegiatan>) => {
            return res.status;
        },
        err => {
            console.error(err);
        });
        console.log(statusCode);
    }

    ada(id) {
       this.dapatkan(id).subscribe(
           (res: HttpResponse<Kegiatan>) => {
               console.log(res.status);
           },
           err => {
               console.error(err);
           }
       );
    }

    simpan(kegiatan: Kegiatan) {
        this.api.post(this.url, kegiatan);
    }

    update(kegiatan: Kegiatan) {
        this.api.put(this.url, kegiatan);
    }

    hapus(id) {
        const urlHapus = this.url + id;
        this.api.delete(urlHapus);
    }
}
