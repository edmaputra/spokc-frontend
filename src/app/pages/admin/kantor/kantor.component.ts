import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { KantorDivisi } from '../../../model/master/kantor-divisi';
import { KantorDivisiService } from '../../../service/master/kantor-divisi.service';

@Component({
    templateUrl: 'kantor.component.html'
})

export class KantorComponent implements OnInit {

    public modalHapus;
    private kantors: KantorDivisi[];
    private kantor: KantorDivisi;
    private idHapus: number;

    constructor(private service: KantorDivisiService, private router: Router) {}

    ngOnInit() {
        this.dapatkanSemua();
    }

    dapatkanSemua() {
        this.service.dapatkanSemua().subscribe(
            resp => {
                this.kantors = resp;
            },
            err => console.log(err)
        );
    }

    edit(id: number) {
        // this.service.ada(id);
        this.router.navigate(['/admin/kantor/e/', id]);
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
