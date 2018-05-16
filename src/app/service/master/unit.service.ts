import { Injectable } from '@angular/core';
import { Unit } from '../../model/master/unit';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ApiService } from '../../service/api.service';

@Injectable()
export class UnitService {

    private url = 'http://localhost:11011/a/unit/';
    private unit: Unit;

    constructor(private http: HttpClient, private api: ApiService) {}

    setUnit(unit: Unit) {
        this.unit = unit;
    }

    getUnit(): Unit {
        return this.unit;
    }

    dapatkanSemua(): Observable<Unit[]> {
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

    simpan(unit: Unit) {
        this.api.post(this.url, unit);
    }

    update(unit: Unit) {
        this.api.put(this.url, unit);
    }

    hapus(id) {
        const urlHapus = this.url + id;
        this.api.delete(urlHapus);
    }
}
