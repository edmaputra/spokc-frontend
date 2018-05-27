import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

import { Wilayah } from '../../../model/master/wilayah';
import { WilayahService } from '../../../service/master/wilayah.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'tambah-wilayah.component.html'
})

export class TambahWilayahComponent implements OnInit {
    @ViewChild('f') form: any;
    wilayah = new Wilayah();
    wilayahOld: string;

    constructor(
        private service: WilayahService,
        private toaster: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            const a: any = this.service.dapatkan(id);
            a.subscribe(
                res => {
                    this.wilayah = res;
                    this.wilayahOld = this.wilayah.nama;
                }
            );
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.tambah();
            this.form.reset();
            this.router.navigate(['/admin/wilayah']);
        }
    }

    tambah() {
        if (this.wilayah.id) {
            this.service.update(this.wilayah);
            this.toaster.success('Wilayah "' + this.wilayahOld + ' => ' + this.wilayah.nama + '"', 'Edit Sukses');
        } else {
            this.service.simpan(this.wilayah);
            this.toaster.success('Wilayah "' + this.wilayah.nama + '" ', 'Tambah Sukses');
        }
    }

}
