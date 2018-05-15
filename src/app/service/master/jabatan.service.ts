import { Injectable } from '@angular/core';
import { Jabatan } from '../../model/master/jabatan';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ApiService } from '../../service/api.service';

@Injectable()
export class JabatanService {

    private url = 'http://localhost:11011/a/jabatan/';
    private jabatan: Jabatan;

    constructor(private http: HttpClient, private api: ApiService) {}

    setJabatan(jabatan: Jabatan) {
        this.jabatan = jabatan;
    }

    getJabatan(): Jabatan {
        return this.jabatan;
    }

    dapatkanSemua(): Observable<Jabatan[]> {
        return this.api.get(this.url);
    }

    dapatkan(id) {
        const urlid = this.url + id;
        return this.api.get(urlid);
    }

    simpan(jabatan: Jabatan) {
        this.api.post(this.url, jabatan);
    }

    update(jabatan: Jabatan) {
        this.api.put(this.url, jabatan);
    }

    hapus(id) {
        const urlHapus = this.url + id;
        this.api.delete(urlHapus);
    }
}
