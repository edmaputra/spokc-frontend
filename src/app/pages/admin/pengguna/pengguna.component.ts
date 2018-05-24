import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Pengguna } from '../../../model/user/pengguna';
import { PenggunaService } from '../../../service/user/pengguna.service';

@Component({
    templateUrl: 'pengguna.component.html'
})

export class PenggunaComponent implements OnInit {

    public modalHapus;
    private penggunas: Pengguna[];
    private idHapus: number;

    constructor(private service: PenggunaService, private router: Router) {}

    ngOnInit() {
        this.dapatkanSemua();
    }

    dapatkanSemua() {
        this.service.dapatkanSemua().subscribe(
            resp => this.penggunas = resp,
            err => console.log(err)
        );
    }


    edit(id: number) {
        this.router.navigate(['/admin/pengguna/e/', id]);
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
}
