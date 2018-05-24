import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

import { Wilayah } from '../../../model/master/wilayah';
import { WilayahService } from '../../../service/master/wilayah.service';

import { AlertService } from '../../../service/alert.service';

@Component({
    templateUrl: 'tambah-wilayah.component.html'
})

export class TambahWilayahComponent implements OnInit {
    @ViewChild('f') form: any;
    wilayah = new Wilayah();

    constructor(
        private service: WilayahService,
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
                    this.wilayah = res;
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
        } else {
            this.service.simpan(this.wilayah);
        }
    }

}
