import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

import { Atm } from '../../../model/it-ebanking/atm';
import { AtmService } from '../../../service/it-ebanking/atm.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'addupdate-atm.component.html'
})

export class AddUpdateAtmComponent implements OnInit {
    @ViewChild('f') form: any;
    atm = new Atm();
    atmOld: string;

    constructor(
        private service: AtmService,
        private router: Router,
        private route: ActivatedRoute,
        private toaster: ToastrService
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            const a: any = this.service.dapatkan(id);
            a.subscribe(
                res => {
                    this.atm = res;
                    this.atmOld = this.atm.name;
                }
            );
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.tambah();
            this.form.reset();
            this.router.navigate(['/atm']);
        }
    }

    tambah() {
        if (this.atm.id) {
            this.service.update(this.atm);
            this.toaster.success('Jabatan "' + this.atmOld + ' => ' + this.atm.name + '"', 'Edit Sukses');
        } else {
            this.service.simpan(this.atm);
            this.toaster.success('Jabatan "' + this.atm.name + '"', 'Tambah Sukses');
        }
    }

}
