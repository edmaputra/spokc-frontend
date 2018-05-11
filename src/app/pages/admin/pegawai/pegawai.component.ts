import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Jabatan } from '../../../model/master/jabatan';
import { Pegawai } from '../../../model/master/pegawai';
import { PegawaiService } from '../../../service/master/pegawai.service';

@Component({
    templateUrl: 'pegawai.component.html'
})

export class PegawaiComponent implements OnInit {

    // j: Jabatan = { id: 1, nama: 'IT',  level: 1};


    pegawais: Pegawai[];
    // = [
    //     { id: 1, nama: 'Mr. Nice',  nip: '111', jabatan: this.j},
    //     { id: 2, nama: 'Narco', nip: '111', jabatan: this.j },
    //     { id: 3, nama: 'Bombasto', nip: '111', jabatan: this.j },
    //     { id: 4, nama: 'Celeritas', nip: '111', jabatan: this.j },
    // ];



    constructor(private pegawaiService: PegawaiService) {}

    ngOnInit() {
        this.dapatkanSemua();
    }

    dapatkanSemua() {
        this.pegawaiService.dapatkanSemua().subscribe(
            pegawai => {
                this.pegawais = pegawai;
            },
            err => {
                console.log(err);
            }
        );
    }
}
