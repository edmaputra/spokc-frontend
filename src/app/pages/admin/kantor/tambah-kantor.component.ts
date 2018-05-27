import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

import { Wilayah } from '../../../model/master/wilayah';
import { KantorDivisi } from '../../../model/master/kantor-divisi';
import { WilayahService } from '../../../service/master/wilayah.service';
import { KantorDivisiService } from '../../../service/master/kantor-divisi.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'tambah-kantor.component.html'
})

export class TambahKantorComponent implements OnInit {
    @ViewChild('f') form: any;
    kantor = new KantorDivisi();
    wilayah: Wilayah[];
    kantorOld: string;

    constructor(
        private wilayahService: WilayahService,
        private service: KantorDivisiService,
        private toaster: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.wilayahService.dapatkanSemua().subscribe(resp => this.wilayah = resp);
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            const a: any = this.service.dapatkan(id);
            a.subscribe(
                res => {
                    this.kantor = res;
                    this.kantorOld = this.kantor.nama;
                }
            );
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.tambah();
            this.form.reset();
            this.router.navigate(['/admin/kantor']);
        }
    }

    tambah() {
        if (this.kantor.id) {
            this.service.update(this.kantor);
            this.toaster.success('Kantor "' + this.kantorOld + ' => ' + this.kantor.nama + '"', 'Edit Sukses');
        } else {
            this.service.simpan(this.kantor);
            this.toaster.success('Kantor "' + this.kantor.nama + '" ', 'Tambah Sukses');
        }
    }

}
