import { Injectable } from '@angular/core';
//
// import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
//
// import { AppConfig } from '../../app-config';
// import { ApiService } from '../../service/api.service';
// import { Username } from '../../model/master';
// import { Pengguna } from '../../model/user';

@Injectable()
export class UsernameService {
    //
    // private url;
    // private username: Username;
    //
    // constructor(private http: HttpClient, private api: ApiService, private appConfig: AppConfig) {
    //     this.url = appConfig.getAPI();
    //     this.url = this.url + '/a/u';
    // }
    //
    // setJabatan(username: Username) {
    //     this.username = username;
    // }
    //
    // getJabatan(): Username {
    //     return this.username;
    // }
    //
    // dapatkanSemua(): Observable<Username[]> {
    //     return this.api.get(this.url);
    // }
    //
    // dapatkanSemuaNama(): Observable<Username[]> {
    //     const nama = this.url + '/nama';
    //     return this.api.get(nama);
    // }
    //
    // dapatkanDenganCari(cari: string): Observable<Username[]> {
    //     return this.api.getCari(this.url, cari);
    // }
    //
    // dapatkan(id) {
    //     const urlid = this.url + '/' + id;
    //     return this.api.get(urlid);
    // }
    //
    // ada(id) {
    //     const j = this.dapatkan(id);
    //     if (j) {
    //         alert('ada');
    //     } else {
    //         alert('tidak ada');
    //     }
    // }
    //
    // simpan(jabatan: Username) {
    //     this.api.post(this.url, jabatan);
    // }
    //
    // update(jabatan: Username) {
    //     this.api.put(this.url, jabatan);
    // }
    //
    // hapus(id) {
    //     const urlHapus = this.url + '/' + id;
    //     this.api.delete(urlHapus);
    // }
}
