import { Injectable } from '@angular/core';
import { Pegawai } from '../../model/master/pegawai';

import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../service/api.service';

@Injectable()
export class PegawaiService {

    private url = 'http://localhost:11011/a/p/';
    private pegawai: Pegawai;

    constructor(private http: HttpClient, private api: ApiService) {}

    setUnit(pegawai: Pegawai) {
        this.pegawai = pegawai;
    }

    getUnit(): Pegawai {
        return this.pegawai;
    }

    dapatkanSemua(): Observable<Pegawai[]> {
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

    simpan(pegawai: Pegawai) {
        this.api.post(this.url, pegawai);
    }

    update(pegawai: Pegawai) {
        this.api.put(this.url, pegawai);
    }

    hapus(id) {
        const urlHapus = this.url + id;
        this.api.delete(urlHapus);
    }

}
