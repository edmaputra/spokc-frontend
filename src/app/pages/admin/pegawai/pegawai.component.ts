import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Jabatan } from '../../../model/master/jabatan';
import { Pegawai } from '../../../model/master/pegawai';
import { PegawaiService } from '../../../service/master/pegawai.service';

@Component({
    templateUrl: 'pegawai.component.html'
})

export class PegawaiComponent implements OnInit {

    public modalHapus;
    private pegawais: Pegawai[];

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
