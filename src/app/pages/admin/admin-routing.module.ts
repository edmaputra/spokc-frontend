import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminComponent } from './admin.component';

import { WilayahComponent, TambahWilayahComponent } from './wilayah';
import { PegawaiComponent, TambahPegawaiComponent } from './pegawai';
import { JabatanComponent, TambahJabatanComponent } from './jabatan';
import { KantorComponent, TambahKantorComponent } from './kantor';
import { PenggunaComponent, TambahPenggunaComponent, UpdatePenggunaComponent } from './pengguna';
import { UsernameComponent, TambahUsernameComponent } from './username';

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
                path: 'wilayah',
                component: WilayahComponent,
                data: {
                    title: 'Wilayah'
                }
            },
            {
                path: 'wilayah/e',
                component: TambahWilayahComponent,
                data: {
                    title: 'Wilayah'
                }
            },
            {
                path: 'wilayah/e/:id',
                component: TambahWilayahComponent,
                data: {
                    title: 'Wilayah'
                }
            },
            {
                path: 'kantor',
                component: KantorComponent,
                data: {
                    title: 'Kantor'
                }
            },
            {
                path: 'kantor/e',
                component: TambahKantorComponent,
                data: {
                    title: 'Kantor'
                }
            },
            {
                path: 'kantor/e/:id',
                component: TambahKantorComponent,
                data: {
                    title: 'Kantor'
                }
            },
            {
                path: 'pengguna',
                component: PenggunaComponent,
                data: {
                    title: 'Pengguna'
                }
            },
            {
                path: 'pengguna/e',
                component: TambahPenggunaComponent,
                data: {
                    title: 'Pengguna'
                }
            },
            {
                path: 'pengguna/u/:id',
                component: UpdatePenggunaComponent,
                data: {
                    title: 'Pengguna'
                }
            },
            {
                path: 'username',
                component: UsernameComponent,
                data: {
                    title: 'Username'
                }
            },
            {
                path: 'username/e',
                component: TambahUsernameComponent,
                data: {
                    title: 'Username'
                }
            },
            {
                path: 'username/e/:id',
                component: TambahUsernameComponent,
                data: {
                    title: 'Username'
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
