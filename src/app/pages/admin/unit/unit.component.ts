import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Unit } from '../../../model/master/unit';
import { UnitService } from '../../../service/master/unit.service';

@Component({
    templateUrl: 'unit.component.html'
})

export class UnitComponent implements OnInit {
    public modalHapus;
    private units: Unit[];
    private unit: Unit;
    private idHapus: number;

    constructor(private service: UnitService, private router: Router) {}

    ngOnInit() {
        this.dapatkanSemua();
    }

    dapatkanSemua() {
        this.service.dapatkanSemua().subscribe(
            js => {
                this.units = js;
            },
            err => {
                console.log(err);
            }
        );
    }

    edit(id: number) {
        // this.service.ada(id);
        this.router.navigate(['/admin/unit/e/', id]);
    }

    hapus() {
        if (this.idHapus) {
            this.service.hapus(this.idHapus);
        }
    }

    setIdHapus(id: number) {
        this.idHapus = id;
    }

    autoRefresh() {
        const element: HTMLElement = document.getElementById('refresh') as HTMLElement;
        element.click();
    }
}
