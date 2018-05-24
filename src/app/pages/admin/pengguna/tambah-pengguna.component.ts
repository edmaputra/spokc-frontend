import { Component, OnInit, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';
import { NgOption } from '@ng-select/ng-select';
import { Observable } from 'rxjs/Observable';

import { Pengguna, Otoritas } from '../../../model/user';
import { PenggunaService, OtoritasService } from '../../../service/user';

import { AlertService } from '../../../service/alert.service';

@Component({
    templateUrl: 'tambah-pengguna.component.html',
    styles: ['.bigCheckBox {width: 25px; height: 25px;}']
})

export class TambahPenggunaComponent implements OnInit {
    @ViewChild('f') form: any;
    public pengguna = new Pengguna();
    otoritas: Otoritas[];

    constructor(
        private otoritasService: OtoritasService,
        private penggunaService: PenggunaService,
        private alertService: AlertService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.otoritasService.dapatkanSemua().subscribe(resp => this.otoritas = resp);
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.penggunaService.dapatkan(id).subscribe(res => {
                this.pengguna = res;
            });
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.tambah();
            this.form.reset();
            this.router.navigate(['/admin/pengguna']);
        }
    }

    tambah() {
        if (this.pengguna.id) {
            this.penggunaService.update(this.pengguna);
        } else {
            this.penggunaService.simpan(this.pengguna);
        }
    }

}
