import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { UnitComponent } from './unit';
import { PegawaiComponent } from './pegawai';
import { KegiatanComponent } from './kegiatan';
import { JabatanComponent } from './jabatan';

import { PegawaiService } from '../../service/master/pegawai.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    UnitComponent,
    PegawaiComponent,
    JabatanComponent,
    KegiatanComponent
  ],
  
})

export class AdminModule { }
