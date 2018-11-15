import { Component, OnInit, ViewChild, Input } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { ModalDirective } from 'ngx-bootstrap/modal';
// import { FormGroup, FormControl } from '@angular/forms';
//
// import { Jabatan } from '../../../model/master/jabatan';
// import { JabatanService } from '../../../service/master/jabatan.service';
//
// import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'tambah-jabatan.component.html'
})

export class TambahJabatanComponent implements OnInit {
    // @ViewChild('f') form: any;
    // jabatan = new Jabatan();
    // jabatanOld: string;
    //
    // constructor(
    //     private service: JabatanService,
    //     private router: Router,
    //     private route: ActivatedRoute,
    //     private toaster: ToastrService
    // ) {}

    ngOnInit() {
        // const id = this.route.snapshot.paramMap.get('id');
        // if (id) {
        //     const a: any = this.service.dapatkan(id);
        //     a.subscribe(
        //         res => {
        //             this.jabatan = res;
        //             this.jabatanOld = this.jabatan.nama;
        //         }
        //     );
        // }
    }

    // onSubmit() {
    //     if (this.form.valid) {
    //         this.tambah();
    //         this.form.reset();
    //         this.router.navigate(['/admin/jabatan']);
    //     }
    // }
    //
    // tambah() {
    //     if (this.jabatan.id) {
    //         this.service.update(this.jabatan);
    //         this.toaster.success('Jabatan "' + this.jabatanOld + ' => ' + this.jabatan.nama + '"', 'Edit Sukses');
    //     } else {
    //         this.service.simpan(this.jabatan);
    //         this.toaster.success('Jabatan "' + this.jabatan.nama + '"', 'Tambah Sukses');
    //     }
    // }

}
