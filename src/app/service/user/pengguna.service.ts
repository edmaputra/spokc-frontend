import { Injectable } from '@angular/core';
import { Pengguna } from '../../model/user/pengguna';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AppConfig } from '../../app-config';

import { ApiService } from '../../service/api.service';

@Injectable()
export class PenggunaService {

    private url;
    private pengguna: Pengguna;

    constructor(private http: HttpClient, private api: ApiService, private appConfig: AppConfig) {
        this.url = appConfig.getAPI();
        this.url = this.url + '/a/user/';
    }

    setPengguna(pengguna: Pengguna) {
        this.pengguna = pengguna;
    }

    getPengguna(): Pengguna {
        return this.pengguna;
    }

    dapatkanSemua(): Observable<Pengguna[]> {
        return this.api.get(this.url);
    }

    dapatkan(id) {
        const urlid = this.url + id;
        return this.api.get(urlid);
    }

    ada(id) {
        const j = this.dapatkan(id);
        if (j) {
            alert('ada');
        } else {
            alert('tidak ada');
        }
    }

    simpan(pengguna: Pengguna) {
        this.api.post(this.url, pengguna);
    }

    update(pengguna: Pengguna) {
        this.api.put(this.url, pengguna);
    }

    hapus(id) {
        const urlHapus = this.url + id;
        this.api.delete(urlHapus);
    }
}
