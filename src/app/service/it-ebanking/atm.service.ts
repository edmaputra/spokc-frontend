import { Injectable } from '@angular/core';
import { Atm } from '../../model/it-ebanking/atm';
import { AtmTransaction } from '../../model/it-ebanking/atm-transaction';
import { AtmDetail } from '../../model/it-ebanking/atm-detail';
import { AtmDate } from '../../model/it-ebanking/atm-date';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AppConfig } from '../../app-config';
import { ApiService } from '../../service/api.service';
import { Page } from '../../model/page';
import { Response } from '../../model/response';

@Injectable()
export class AtmService {

  private url;
  private defaultUrl;
  private ejUrl;
  private glUrl;
  private atm: Atm;

  constructor(private http: HttpClient, private api: ApiService, private appConfig: AppConfig) {
    this.defaultUrl = appConfig.getItEbankingApiProxy();
    this.url = this.defaultUrl + '/v1/atm';
    this.ejUrl = this.defaultUrl + '/v1/ej';
    this.glUrl = this.defaultUrl + 'v1/gl/';
  }

  setAtm(Atm: Atm) {
    this.atm = Atm;
  }

  getAtm(): Atm {
    return this.atm;
  }

  dapatkanSemua(): Observable<Page> {
    return this.api.get(this.url);
  }

  getPageable(page: string, size: string, search: string): Observable<Page> {
    return this.api.getPageable(this.url, page, size, search);
  }

  dapatkanDenganCari(cari: string): Observable<Page> {
    return this.api.getCari(this.url, cari);
  }

  dapatkanSemuaNama(): Observable<Atm[]> {
    const nama = this.url + '/nama';
    return this.api.get(nama);
  }

  dapatkan(id) {
    const urlid = this.url + '/' + id;
    return this.api.get(urlid);
  }

  dapatkanRekonsiliasiAtm(atm, date): Observable<AtmDetail> {
    const urlR = this.url + '/r'
    return this.api.getRekonsiliasiAtm(urlR, atm, date);
  }

  dapatkanAtmReconDateById(id): Observable<AtmDate> {
    const urlR = this.url + '/r/date/'+id;
    return this.api.get(urlR);
  }

  hapusAtmReconDateById(id): Observable<any> {
    const urlR = this.url + '/r/date/'+id;
    return this.api.deleteObservable(urlR);
  }

  ada(id) {
    const j = this.dapatkan(id);
    if (j) {
      alert('ada');
    } else {
      alert('tidak ada');
    }
  }

  simpan(Atm: Atm) {
    this.api.post(this.url, Atm);
  }

  simpanRekonsiliasiTanggal(atmDate: AtmDate): Observable<Response> {
    const urlR = this.url + '/r/date';
    return this.api.postObservable(urlR, atmDate);
  }

  loadRekonsiliasiTanggal(): Observable<Page> {
    const atmDate = this.url + '/r/date';
    return this.api.get(atmDate);
  }

  updateRekonsiliasiTanggal(atmDate: AtmDate): Observable<Response> {
    const urlR = this.url + '/r/date';
    return this.api.putObservable(urlR, atmDate);
  }

  updateRekonsiliasiTanggalList(): Observable<any> {
    const urlR = this.url + '/r/date/list';
    return this.api.putObservable(urlR, null);
  }

  update(Atm: Atm) {
    this.api.put(this.url, Atm);
  }

  postObservable(object: any, url: string) {
    return this.api.postObservable(url, object);
  }

  putObservable(object: any, url: string) {
    return this.api.putObservable(url, object);
  }

  deleteObservable(url: string) {
    return this.api.deleteObservable(url);
  }

  hapus(id) {
    const urlHapus = this.url + '/' + id;
    this.api.delete(urlHapus);
  }

  ejGlUpload(form: FormData, url: string): Observable<any> {
    return this.api.postObservable(this.defaultUrl + url + '/upload', form);
  }
}
