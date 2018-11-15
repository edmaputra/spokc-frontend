import { Component, OnInit, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { ModalDirective } from 'ngx-bootstrap/modal';
// import { FormGroup, FormControl } from '@angular/forms';
// import { NgOption } from '@ng-select/ng-select';
// import { Observable } from 'rxjs/Observable';
//
// import { Pegawai, Jabatan, KantorDivisi, Username } from '../../../model/master';
// import { Pengguna } from '../../../model/user/pengguna';
// import { PegawaiService, JabatanService, KantorDivisiService, UsernameService } from '../../../service/master';
// import { PenggunaService } from '../../../service/user/pengguna.service';
//
// import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'tambah-pegawai.component.html'
})

export class TambahPegawaiComponent implements OnInit {
    // @ViewChild('f') form: any;
    // public pegawai = new Pegawai();
    // jabatans: Jabatan[];
    // kantors: KantorDivisi[];
    // penggunas: Pengguna[];
    // usernames: Username[];
    // pegawaiOld: string;
    //
    // constructor(
    //     private service: PegawaiService,
    //     private jabatanService: JabatanService,
    //     private kdService: KantorDivisiService,
    //     private penggunaService: PenggunaService,
    //     private usernameService: UsernameService,
    //     private toaster: ToastrService,
    //     private router: Router,
    //     private route: ActivatedRoute
    // ) {}
    //
    ngOnInit() {
    //     this.jabatanService.dapatkanSemua().subscribe(resp => this.jabatans = resp.content);
    //     this.kdService.dapatkanSemua().subscribe(resp => this.kantors = resp);
    //     this.penggunaService.dapatkanSemua().subscribe(resp => this.penggunas = resp);
    //     this.usernameService.dapatkanSemua().subscribe(resp => this.usernames = resp);
    //     const id = this.route.snapshot.paramMap.get('id');
    //     if (id) {
    //         this.service.dapatkan(id).subscribe(res => {
    //             this.pegawai = res;
    //             this.pegawaiOld = this.pegawai.nama;
    //         });
    //     }
    }
    //
    // onSubmit() {
    //     if (this.form.valid) {
    //         this.tambah();
    //         this.form.reset();
    //         this.router.navigate(['/admin/pegawai']);
    //     }
    // }
    //
    // tambah() {
    //     if (this.pegawai.id) {
    //         this.service.update(this.pegawai);
    //         this.toaster.success('Pegawai "' + this.pegawaiOld + ' => ' + this.pegawai.nama + '"', 'Edit Sukses');
    //     } else {
    //         this.service.simpan(this.pegawai);
    //         this.toaster.success('Pegawai "' + this.pegawai.nama + '" ', 'Tambah Sukses');
    //     }
    // }

}
