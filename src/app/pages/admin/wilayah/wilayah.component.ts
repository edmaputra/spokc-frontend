import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { ModalDirective } from 'ngx-bootstrap/modal';
//
// import { Wilayah } from '../../../model/master/wilayah';
// import { WilayahService } from '../../../service/master/wilayah.service';
//
// import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'wilayah.component.html',
  styles: ['form {display: flex; flex-direction: column; align-items: flex-end;}']
})

export class WilayahComponent implements OnInit {

  // public modalHapus;
  // wilayahs: Wilayah[];
  // wilayah: Wilayah;
  // idHapus: number;
  // cari: string;
  //
  // constructor(private service: WilayahService, private router: Router, private toaster: ToastrService) { }
  //
  ngOnInit() {
  //   this.dapatkanSemua();
  }
  //
  // dapatkanSemua() {
  //   this.service.dapatkanSemua().subscribe(
  //     resp => {
  //       this.wilayahs = resp;
  //     },
  //     err => console.log(err)
  //   );
  // }
  //
  // edit(id: number) {
  //   // this.service.ada(id);
  //   this.router.navigate(['/admin/wilayah/e/', id]);
  // }
  //
  // hapus() {
  //   if (this.idHapus) {
  //     this.service.hapus(this.idHapus);
  //     this.toaster.info('ID Wilayah "' + this.idHapus, 'Hapus Berhasil');
  //   }
  // }
  //
  // setIdHapus(id: number) {
  //   this.idHapus = id;
  // }
  //
  // autoRefresh() {
  //   const element: HTMLElement = document.getElementById('refresh') as HTMLElement;
  //   element.click();
  // }
  //
  // find() {
  //   this.service.dapatkanDenganCari(this.cari).subscribe(
  //     resp => {
  //       this.wilayahs = resp;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
}
