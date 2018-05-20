import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Kegiatan } from '../../../model/master/kegiatan';
import { KegiatanService } from '../../../service/master/kegiatan.service';

@Component({
    templateUrl: 'kegiatan.component.html'
})

export class KegiatanComponent implements OnInit {

    public modalHapus;
    private kegiatans: Kegiatan[];
    private kegiatan: Kegiatan;
    private idHapus: number;

    constructor(private service: KegiatanService, private router: Router) {}

    ngOnInit() {
        this.dapatkanSemua();
    }

    dapatkanSemua() {
        this.service.dapatkanSemua().subscribe(
            js => {
                this.kegiatans = js;
            },
            err => {
                console.log(err);
            }
        );
    }

    edit(id: number) {
        this.router.navigate(['/admin/kegiatan/e/', id]);
    }

    hapus() {
        if (this.idHapus) {
            this.service.hapus(this.idHapus);
        }
    }

    setIdHapus(id: number) {
        this.idHapus = id;
    }

    autoRefresh() {
        const element: HTMLElement = document.getElementById('refresh') as HTMLElement;
        element.click();
    }

    isExist(id: number) {
        this.service.isExist(id);
    }
}
