import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { ModalDirective } from 'ngx-bootstrap/modal';
//
// import { KantorDivisi } from '../../../model/master/kantor-divisi';
// import { KantorDivisiService } from '../../../service/master/kantor-divisi.service';
//
// import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'kantor.component.html',
    styles: ['form {display: flex; flex-direction: column; align-items: flex-end;}']
})

export class KantorComponent implements OnInit {

    // public modalHapus;
    // kantors: KantorDivisi[];
    // kantor: KantorDivisi;
    // idHapus: number;
    // cari: string;
    //
    // constructor(
    //     private service: KantorDivisiService,
    //     private router: Router,
    //     private toaster: ToastrService
    // ) {}
    //
    ngOnInit() {
    //     this.dapatkanSemua();
    }
    //
    // dapatkanSemua() {
    //     this.service.dapatkanSemua().subscribe(
    //         resp => {
    //             this.kantors = resp;
    //         },
    //         err => console.log(err)
    //     );
    // }
    //
    // edit(id: number) {
    //     // this.service.ada(id);
    //     this.router.navigate(['/admin/kantor/e/', id]);
    // }
    //
    // hapus() {
    //     if (this.idHapus) {
    //         this.service.hapus(this.idHapus);
    //         this.toaster.info('ID Kantor "' + this.idHapus, 'Hapus Berhasil');
    //     }
    // }
    //
    // setIdHapus(id: number) {
    //     this.idHapus = id;
    // }
    //
    // autoRefresh() {
    //     const element: HTMLElement = document.getElementById('refresh') as HTMLElement;
    //     element.click();
    // }
    //
    // find() {
    //     this.service.dapatkanDenganCari(this.cari).subscribe(
    //         resp => {
    //             this.kantors = resp;
    //         },
    //         err => {
    //             console.log(err);
    //         }
    //     );
    // }
}
