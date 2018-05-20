import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

import { Kegiatan } from '../../../model/master/kegiatan';
import { KegiatanService } from '../../../service/master/kegiatan.service';

import { AlertService } from '../../../service/alert.service';

@Component({
    templateUrl: 'tambah-kegiatan.component.html'
})

export class TambahKegiatanComponent implements OnInit {
    @ViewChild('f') form: any;
    kegiatan = new Kegiatan();

    constructor(
        private service: KegiatanService,
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
                    this.kegiatan = res;
                }
            );
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.tambah();
            this.form.reset();
            this.router.navigate(['/admin/kegiatan']);
        }
    }

    tambah() {
        if (this.kegiatan.id) {
            this.service.update(this.kegiatan);
        } else {
            this.service.simpan(this.kegiatan);
        }
    }

}
