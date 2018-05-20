import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { UnitComponent, TambahUnitComponent } from './unit';
import { PegawaiComponent, TambahPegawaiComponent } from './pegawai';
import { KegiatanComponent, TambahKegiatanComponent } from './kegiatan';
import { JabatanComponent, TambahJabatanComponent } from './jabatan';
const ADMIN_COMPONENTS = [
  UnitComponent, TambahUnitComponent,
  PegawaiComponent, TambahPegawaiComponent,
  KegiatanComponent, TambahKegiatanComponent,
  JabatanComponent, TambahJabatanComponent
];

import { PegawaiService, JabatanService, UnitService, KegiatanService } from '../../service/master';
import { PenggunaService } from '../../service/user';
const ADMIN_SERVICES = [PegawaiService, JabatanService, UnitService, KegiatanService, PenggunaService];


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
    ...ADMIN_COMPONENTS
  ],
  providers: [
    ...ADMIN_SERVICES,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
          notFoundText: 'Items not found',
          addTagText: 'Add item',
          typeToSearchText: 'Type to search',
          loadingText: 'Loading...',
          clearAllText: 'Clear all'
      }
  }
  ]
})

export class AdminModule { }
