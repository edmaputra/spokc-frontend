import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {

    constructor(private toastr: ToastrService) {}

    ngOnInit() {
        this.toastr.success('abc');
    }

}