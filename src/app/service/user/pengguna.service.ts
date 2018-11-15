import { Injectable } from '@angular/core';
import { User } from '../../model/user/user';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AppConfig } from '../../app-config';

import { ApiService } from '../../service/api.service';

@Injectable()
export class UserService {

    private url;
    private pengguna: User;

    constructor(private http: HttpClient, private api: ApiService, private appConfig: AppConfig) {
        this.url = appConfig.getAPI();
        this.url = this.url + '/a/user';
    }

    setUser(pengguna: User) {
        this.pengguna = pengguna;
    }

    getUser(): User {
        return this.pengguna;
    }

    dapatkanSemua(): Observable<User[]> {
        return this.api.get(this.url);
    }

    dapatkan(id) {
        const urlid = this.url + '/' + id;
        return this.api.get(urlid);
    }

    dapatkanDenganCari(cari: string): Observable<User[]> {
        return this.api.getCari(this.url, cari);
    }

    ada(id) {
        const j = this.dapatkan(id);
        if (j) {
            alert('ada');
        } else {
            alert('tidak ada');
        }
    }

    simpan(pengguna: User) {
        this.api.post(this.url, pengguna);
    }

    update(pengguna: User) {
        this.api.put(this.url, pengguna);
    }

    resetPassword(pengguna: User) {
        const urlid = this.url + '/reset';
        this.api.put(urlid, pengguna);
    }

    hapus(id) {
        const urlHapus = this.url + '/' + id;
        this.api.delete(urlHapus);
    }
}
