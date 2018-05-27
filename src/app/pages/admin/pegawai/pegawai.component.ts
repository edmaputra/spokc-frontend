import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Pegawai } from '../../../model/master';
import { PegawaiService } from '../../../service/master/pegawai.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'pegawai.component.html'
})

export class PegawaiComponent implements OnInit {

    public modalHapus;
    private pegawais: Pegawai[];
    private idHapus: number;

    constructor(private service: PegawaiService, private router: Router, private toaster: ToastrService) {}

    ngOnInit() {
        this.dapatkanSemua();
    }

    dapatkanSemua() {
        this.service.dapatkanSemua().subscribe(
            pegawai => {
                this.pegawais = pegawai;
            },
            err => {
                console.log(err);
            }
        );
    }


    edit(id: number) {
        this.router.navigate(['/admin/pegawai/e/', id]);
    }

    hapus() {
        if (this.idHapus) {
            this.service.hapus(this.idHapus);
            this.toaster.info('ID Pegawai "' + this.idHapus, 'Hapus Berhasil');
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
