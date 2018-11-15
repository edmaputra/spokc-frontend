import { Injectable } from '@angular/core';
// import { Jabatan } from '../../model/master/jabatan';
//
// import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
//
// import { AppConfig } from '../../app-config';
// import { ApiService } from '../../service/api.service';
// import { Page } from '../../model/page';

@Injectable()
export class JabatanService {
    //
    // private url;
    // private jabatan: Jabatan;
    //
    // constructor(private http: HttpClient, private api: ApiService, private appConfig: AppConfig) {
    //     this.url = appConfig.getAPI();
    //     this.url = this.url + '/a/jabatan';
    // }
    //
    // setJabatan(jabatan: Jabatan) {
    //     this.jabatan = jabatan;
    // }
    //
    // getJabatan(): Jabatan {
    //     return this.jabatan;
    // }
    //
    // dapatkanSemua(): Observable<Page> {
    //     return this.api.get(this.url);
    // }
    //
    // dapatkanDenganCari(cari: string): Observable<Page> {
    //     return this.api.getCari(this.url, cari);
    // }
    //
    // dapatkanSemuaNama(): Observable<Jabatan[]> {
    //     const nama = this.url + '/nama';
    //     return this.api.get(nama);
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
    // simpan(jabatan: Jabatan) {
    //     this.api.post(this.url, jabatan);
    // }
    //
    // update(jabatan: Jabatan) {
    //     this.api.put(this.url, jabatan);
    // }
    //
    // hapus(id) {
    //     const urlHapus = this.url + '/' + id;
    //     this.api.delete(urlHapus);
    // }
}
