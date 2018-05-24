import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Wilayah } from '../../../model/master/wilayah';
import { WilayahService } from '../../../service/master/wilayah.service';

@Component({
    templateUrl: 'wilayah.component.html'
})

export class WilayahComponent implements OnInit {

    public modalHapus;
    private wilayahs: Wilayah[];
    private wilayah: Wilayah;
    private idHapus: number;

    constructor(private service: WilayahService, private router: Router) {}

    ngOnInit() {
        this.dapatkanSemua();
    }

    dapatkanSemua() {
        this.service.dapatkanSemua().subscribe(
            resp => {
                this.wilayahs = resp;
            },
            err => console.log(err)
        );
    }

    edit(id: number) {
        // this.service.ada(id);
        this.router.navigate(['/admin/wilayah/e/', id]);
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
