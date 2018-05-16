import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { UnitComponent, TambahUnitComponent } from './unit';
import { PegawaiComponent } from './pegawai';
import { KegiatanComponent } from './kegiatan';
import { JabatanComponent, TambahJabatanComponent } from './jabatan';
// import { AlertComponent } from '../../components/app-alert';

import { PegawaiService, JabatanService, UnitService } from '../../service/master';
// import { AlertService } from '../../service/alert.service';


@NgModule({
  imports: [
    ModalModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    UnitComponent,
    PegawaiComponent,
    JabatanComponent,
    KegiatanComponent,
    TambahJabatanComponent,
    TambahUnitComponent
  ],
  providers: [
    PegawaiService,
    JabatanService,
    UnitService
  ]
})

export class AdminModule { }
