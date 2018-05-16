import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

import { Jabatan } from '../../../model/master/jabatan';
import { JabatanService } from '../../../service/master/jabatan.service';

import { AlertService } from '../../../service/alert.service';

@Component({
    templateUrl: 'tambah-jabatan.component.html'
})

export class TambahJabatanComponent implements OnInit {
    @ViewChild('f') form: any;
    jabatan = new Jabatan();

    constructor(
        private service: JabatanService,
        private alertService: AlertService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            const a: any = this.service.dapatkan(id);
            a.subscribe(
                res => {
                    this.jabatan = res;
                }
            );
        }
    }

    onSubmit() {
        if (this.form.valid) {
            alert('tambah');
            // this.tambah();
            this.form.reset();
        }
    }

    tambah() {
        if (this.jabatan.id) {
            this.service.update(this.jabatan);
        } else {
            this.service.simpan(this.jabatan);
        }
        this.router.navigate(['/admin/jabatan']);
    }

}
