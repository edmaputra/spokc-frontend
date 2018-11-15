import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { ModalDirective } from 'ngx-bootstrap/modal';
//
// import { Pengguna } from '../../../model/user/pengguna';
// import { PenggunaService } from '../../../service/user/pengguna.service';
//
// import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'pengguna.component.html',
  styles: ['form {display: flex; flex-direction: column; align-items: flex-end;}']
})

export class PenggunaComponent implements OnInit {
  //
  // public modalHapus;
  // public modalResetPassword;
  // penggunas: Pengguna[];
  // idHapus: number;
  // idReset: number;
  // cari: string;
  //
  // constructor(private service: PenggunaService, private router: Router, private toaster: ToastrService) { }
  //
  ngOnInit() {
  //   this.dapatkanSemua();
  }
  //
  // dapatkanSemua() {
  //   this.service.dapatkanSemua().subscribe(
  //     resp => this.penggunas = resp,
  //     err => console.log(err)
  //   );
  // }
  //
  //
  // edit(id: number) {
  //   this.router.navigate(['/admin/pengguna/u/', id]);
  // }
  //
  // resetPassword() {
  //   this.service.dapatkan(this.idReset).subscribe(
  //     resp => {
  //       this.service.resetPassword(resp);
  //       this.toaster.info('Reset Password Berhasil');
  //     },
  //     err => this.toaster.error(err)
  //   );
  // }
  //
  // hapus() {
  //   if (this.idHapus) {
  //     this.service.hapus(this.idHapus);
  //     this.toaster.info('ID Pengguna "' + this.idHapus, 'Hapus Berhasil');
  //   }
  // }
  //
  // setIdHapus(id: number) {
  //   this.idHapus = id;
  // }
  //
  // setIdReset(id: number) {
  //   this.idReset = id;
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
  //       this.penggunas = resp;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
}
