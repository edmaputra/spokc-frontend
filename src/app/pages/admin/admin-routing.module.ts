import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminComponent } from './admin.component';

import { UnitComponent, TambahUnitComponent } from './unit';
import { PegawaiComponent, TambahPegawaiComponent } from './pegawai';
import { KegiatanComponent, TambahKegiatanComponent } from './kegiatan';
import { JabatanComponent, TambahJabatanComponent } from './jabatan';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Administrator'
        },
        children: [
            {
                path: '',
                component: AdminComponent,
                data: {
                    title: ''
                }
            },
            {
                path: 'pegawai',
                component: PegawaiComponent,
                data: {
                    title: 'Pegawai'
                }
            },
            {
                path: 'pegawai/e',
                component: TambahPegawaiComponent,
                data: {
                    title: 'Pegawai'
                }
            },
            {
                path: 'pegawai/e/:id',
                component: TambahPegawaiComponent,
                data: {
                    title: 'Pegawai'
                }
            },
            {
                path: 'jabatan',
                component: JabatanComponent,
                data: {
                    title: 'Jabatan'
                }
            },
            {
                path: 'jabatan/e',
                component: TambahJabatanComponent,
                data: {
                    title: 'Jabatan'
                }
            },
            {
                path: 'jabatan/e/:id',
                component: TambahJabatanComponent,
                data: {
                    title: 'Jabatan'
                }
            },
            {
                path: 'unit',
                component: UnitComponent,
                data: {
                    title: 'Unit'
                }
            },
            {
                path: 'unit/e',
                component: TambahUnitComponent,
                data: {
                    title: 'Unit'
                }
            },
            {
                path: 'unit/e/:id',
                component: TambahUnitComponent,
                data: {
                    title: 'Unit'
                }
            },
            {
                path: 'kegiatan',
                component: KegiatanComponent,
                data: {
                    title: 'Kegiatan'
                }
            },
            {
                path: 'kegiatan/e',
                component: TambahKegiatanComponent,
                data: {
                    title: 'Kegiatan'
                }
            },
            {
                path: 'kegiatan/e/:id',
                component: TambahKegiatanComponent,
                data: {
                    title: 'Kegiatan'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
