import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { ModalDirective } from 'ngx-bootstrap/modal';
//
// import { Username } from '../../../model/master';
// import { UsernameService } from '../../../service/master';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'username.component.html',
  styles: ['form {display: flex; flex-direction: column; align-items: flex-end;}']
})

export class UsernameComponent implements OnInit {
  //
  // public modalHapus;
  // usernames: Username[];
  // username: Username;
  // idHapus: number;
  // cari: string;
  //
  // constructor(private service: UsernameService, private router: Router, private toaster: ToastrService) { }
  //
  ngOnInit() {
    //   this.dapatkanSemua();
  }
  //
  // dapatkanSemua() {
  //   this.service.dapatkanSemua().subscribe(
  //     js => {
  //       this.usernames = js;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
  //
  // edit(id: number) {
  //   // this.service.ada(id);
  //   this.router.navigate(['/admin/username/e/', id]);
  // }
  //
  // hapus() {
  //   if (this.idHapus) {
  //     this.service.hapus(this.idHapus);
  //     this.toaster.info('ID Username "' + this.idHapus + '" Terhapus', 'Hapus Berhasil');
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
  //       this.usernames = resp;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
}
