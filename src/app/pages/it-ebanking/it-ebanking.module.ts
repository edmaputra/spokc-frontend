import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ItEbankingComponent } from './it-ebanking.component';
import { ItEbankingRoutingModule } from './it-ebanking.routing';
import { AtmService } from '../../service/it-ebanking/atm.service';
import { ToasterGenerator } from '../../service/';

import { AddUpdateAtmComponent, AtmComponent } from './atm';
import { RekonsiliasiComponent } from './rekonsiliasi';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { NgxLoadingModule } from 'ngx-loading';

const IT_EBANKING_COMPONENTS = [
  ItEbankingComponent,
  AddUpdateAtmComponent, AtmComponent,
  RekonsiliasiComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    PaginationModule.forRoot(),
    ItEbankingRoutingModule,
    TabsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxLoadingModule.forRoot({})
  ],
  declarations: [
    ...IT_EBANKING_COMPONENTS
  ],
  providers: [
    AtmService,
    ToasterGenerator,
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'id' }
  ]
})
export class ItEbankingModule { }
