import { Injectable } from '@angular/core';
import { KantorDivisi } from '../../model/master/kantor-divisi';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AppConfig } from '../../app-config';
import { ApiService } from '../../service/api.service';

@Injectable()
export class KantorDivisiService {

    private url;
    private kantorDivisi: KantorDivisi;

    constructor(private http: HttpClient, private api: ApiService, private appConfig: AppConfig) {
        this.url = appConfig.getAPI();
        this.url = this.url + '/a/kd/';
    }

    setJabatan(kantorDivisi: KantorDivisi) {
        this.kantorDivisi = kantorDivisi;
    }

    getJabatan(): KantorDivisi {
        return this.kantorDivisi;
    }

    dapatkanSemua(): Observable<KantorDivisi[]> {
        return this.api.get(this.url);
    }

    dapatkanSemuaNama(): Observable<KantorDivisi[]> {
        const nama = this.url + 'nama';
        return this.api.get(nama);
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

    simpan(jabatan: KantorDivisi) {
        this.api.post(this.url, jabatan);
    }

    update(jabatan: KantorDivisi) {
        this.api.put(this.url, jabatan);
    }

    hapus(id) {
        const urlHapus = this.url + id;
        this.api.delete(urlHapus);
    }
}
