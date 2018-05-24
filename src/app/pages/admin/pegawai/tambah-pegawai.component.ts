import { Component, OnInit, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';
import { NgOption } from '@ng-select/ng-select';
import { Observable } from 'rxjs/Observable';

import { Pegawai, Jabatan, KantorDivisi } from '../../../model/master';
import { Pengguna } from '../../../model/user/pengguna';
// import { Unit } from '../../../model/master/unit';
import { PegawaiService, JabatanService, KantorDivisiService } from '../../../service/master';
import { PenggunaService } from '../../../service/user/pengguna.service';

import { AlertService } from '../../../service/alert.service';

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'tambah-pegawai.component.html'
})

export class TambahPegawaiComponent implements OnInit {
    @ViewChild('f') form: any;
    public pegawai = new Pegawai();
    jabatans: Jabatan[];
    kantors: KantorDivisi[];
    penggunas: Pengguna[];

    constructor(
        private service: PegawaiService,
        private jabatanService: JabatanService,
        private kdService: KantorDivisiService,
        private penggunaService: PenggunaService,
        private alertService: AlertService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.jabatanService.dapatkanSemua().subscribe(resp => this.jabatans = resp);
        this.kdService.dapatkanSemua().subscribe(resp => this.kantors = resp);
        this.penggunaService.dapatkanSemua().subscribe(resp => this.penggunas = resp);
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.service.dapatkan(id).subscribe(res => {
                this.pegawai = res;
            });
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.tambah();
            this.form.reset();
            this.router.navigate(['/admin/pegawai']);
        }
    }

    tambah() {
        if (this.pegawai.id) {
            console.log('Update: ' + this.pegawai);
            this.service.update(this.pegawai);
        } else {
            this.service.simpan(this.pegawai);
        }
    }

}
