import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        data: {
            title: 'Administrator'
        },
        // children: [
        //     {
        //         path: 'pegawai',
        //         component: PegawaiComponent,
        //         data: {
        //             title: 'Pegawai'
        //         }
        //     },
        //     {
        //         path: 'jabatan',
        //         component: JabatanComponent,
        //         data: {
        //             title: 'Jabatan'
        //         }
        //     },
        //     {
        //         path: 'unit',
        //         component: UnitComponent,
        //         data: {
        //             title: 'Unit'
        //         }
        //     },
        //     {
        //         path: 'kegiatan',
        //         component: KegiatanComponent,
        //         data: {
        //             title: 'Kegiatan'
        //         }
        //     },
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}