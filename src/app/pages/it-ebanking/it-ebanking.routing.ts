import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItEbankingComponent } from './it-ebanking.component';
import { AddUpdateAtmComponent, AtmComponent } from './atm';
import { RekonsiliasiComponent } from './rekonsiliasi';

const routes: Routes = [
  {
    path: '',
    // component: ItEbankingComponent,
    data: {
      title: 'IT Ebanking'
    },
    children: [
      {
        path: 'atm',
        component: AtmComponent,
        data: {
          title: 'ATM'
        }
      },
      // {
      //   path: 'atm/e',
      //   component: AddUpdateAtmComponent,
      //   data: {
      //     title: 'ATM'
      //   }
      // },
      // {
      //   path: 'atm/e/:id',
      //   component: AddUpdateAtmComponent,
      //   data: {
      //     title: 'ATM'
      //   }
      // },
      {
        path: 'atm-rekon',
        component: RekonsiliasiComponent,
        data: {
          title: 'Rekonsiliasi'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItEbankingRoutingModule { }
