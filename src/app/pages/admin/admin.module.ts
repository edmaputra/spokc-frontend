import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { WilayahComponent, TambahWilayahComponent } from './wilayah';
import { PegawaiComponent, TambahPegawaiComponent } from './pegawai';
import { JabatanComponent, TambahJabatanComponent } from './jabatan';
import { KantorComponent, TambahKantorComponent } from './kantor';
import { PenggunaComponent, TambahPenggunaComponent, UpdatePenggunaComponent } from './pengguna';
import { UsernameComponent, TambahUsernameComponent } from './username';

const ADMIN_COMPONENTS = [
  WilayahComponent, TambahWilayahComponent,
  PegawaiComponent, TambahPegawaiComponent,
  JabatanComponent, TambahJabatanComponent,
  KantorComponent, TambahKantorComponent,
  PenggunaComponent, TambahPenggunaComponent, UpdatePenggunaComponent,
  UsernameComponent, TambahUsernameComponent
];

import { PegawaiService, JabatanService, WilayahService, KantorDivisiService, UsernameService } from '../../service/master';
import { PenggunaService, OtoritasService } from '../../service/user';
const ADMIN_SERVICES = [
  PegawaiService,
  JabatanService,
  PenggunaService,
  WilayahService,
  KantorDivisiService,
  OtoritasService,
  UsernameService
];

import { EqualValidator } from '../../directives/equal-validator';

@NgModule({
  imports: [
    ModalModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    NgSelectModule
  ],
  declarations: [
    AdminComponent,
    EqualValidator,
    ...ADMIN_COMPONENTS
  ],
  providers: [
    ...ADMIN_SERVICES,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
          notFoundText: 'Item Tidak Ditemukan',
          addTagText: 'Tambah item',
          typeToSearchText: 'Ketik untuk Mencari',
          loadingText: 'Memuat...',
          clearAllText: 'Bersihkan Semua'
      }
  }
  ]
})

export class AdminModule { }
