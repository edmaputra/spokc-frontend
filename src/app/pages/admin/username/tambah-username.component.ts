import { Component, OnInit, ViewChild, Input } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { ModalDirective } from 'ngx-bootstrap/modal';
// import { FormGroup, FormControl } from '@angular/forms';
//
// import { Username } from '../../../model/master';
// import { UsernameService } from '../../../service/master';
//
// import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'tambah-username.component.html'
})

export class TambahUsernameComponent implements OnInit {
    // @ViewChild('f') form: any;
    // username = new Username();
    // usernameOld: string;
    //
    // constructor(
    //     private service: UsernameService,
    //     private router: Router,
    //     private route: ActivatedRoute,
    //     private toaster: ToastrService
    // ) {}
    //
    ngOnInit() {
    //     const id = this.route.snapshot.paramMap.get('id');
    //     if (id) {
    //         const a: any = this.service.dapatkan(id);
    //         a.subscribe(
    //             res => {
    //                 this.username = res;
    //                 this.usernameOld = this.username.nama;
    //             }
    //         );
    //     }
    }
    //
    // onSubmit() {
    //     if (this.form.valid) {
    //         this.tambah();
    //         this.form.reset();
    //         this.router.navigate(['/admin/username']);
    //     }
    // }
    //
    // tambah() {
    //     if (this.username.id) {
    //         this.service.update(this.username);
    //         this.toaster.success('Username "' + this.usernameOld + ' => ' + this.username.name + '"', 'Edit Sukses');
    //     } else {
    //         this.service.simpan(this.username);
    //         this.toaster.success('Username "' + this.username.nama + '"', 'Tambah Sukses');
    //     }
    // }

}
