import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Jabatan } from '../../../model/master/jabatan';
import { JabatanService } from '../../../service/master/jabatan.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'jabatan.component.html',
    styles: ['form {display: flex; flex-direction: column; align-items: flex-end;}']
})

export class JabatanComponent implements OnInit {

    public modalHapus;
    private jabatans: Jabatan[];
    private jabatan: Jabatan;
    private idHapus: number;
    private cari: string;

    constructor(private service: JabatanService, private router: Router, private toaster: ToastrService) {}

    ngOnInit() {
        this.dapatkanSemua();
    }

    dapatkanSemua() {
        this.service.dapatkanSemua().subscribe(
            js => {
                this.jabatans = js;
                this.cari = '';
            },
            err => {
                console.log(err);
            }
        );
    }

    edit(id: number) {
        this.router.navigate(['/admin/jabatan/e/', id]);
    }

    hapus() {
        if (this.idHapus) {
            this.service.hapus(this.idHapus);
            this.toaster.info('ID Jabatan "' + this.idHapus + '" Terhapus', 'Hapus Berhasil');
        }
    }

    setIdHapus(id: number) {
        this.idHapus = id;
    }

    autoRefresh() {
        const element: HTMLElement = document.getElementById('refresh') as HTMLElement;
        element.click();
    }

    find() {
        this.service.dapatkanDenganCari(this.cari).subscribe(
            js => {
                this.jabatans = js;
            },
            err => {
                console.log(err);
            }
        );
    }
}
