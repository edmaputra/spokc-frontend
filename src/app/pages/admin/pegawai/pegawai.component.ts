import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { p } from './mock.pegawai';

@Component({
    templateUrl: 'pegawai.component.html'
})

export class PegawaiComponent {

    pegawais: p;

    constructor() {}
}
