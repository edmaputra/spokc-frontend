import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { UnitComponent } from './unit';
import { PegawaiComponent } from './pegawai';
import { KegiatanComponent } from './kegiatan';
import { JabatanComponent, TambahJabatanComponent } from './jabatan';
// import { AlertComponent } from '../../components/app-alert';

import { PegawaiService } from '../../service/master/pegawai.service';
import { JabatanService } from '../../service/master/jabatan.service';
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
    
  ],
  providers: [
    PegawaiService,
    JabatanService
  ]
})

export class AdminModule { }
