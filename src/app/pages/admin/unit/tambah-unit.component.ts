import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

import { Unit } from '../../../model/master/unit';
import { UnitService } from '../../../service/master/unit.service';

import { AlertService } from '../../../service/alert.service';

@Component({
    templateUrl: 'tambah-unit.component.html'
})

export class TambahUnitComponent implements OnInit {
    @ViewChild('f') form: any;
    unit = new Unit();

    constructor(
        private service: UnitService,
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
                    this.unit = res;
                }
            );
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.tambah();
            this.form.reset();
            this.router.navigate(['/admin/unit']);
        }
    }

    tambah() {
        if (this.unit.id) {
            this.service.update(this.unit);
        } else {
            this.service.simpan(this.unit);
        }
    }

}
