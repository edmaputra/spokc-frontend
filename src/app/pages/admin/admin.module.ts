import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [ AdminComponent ]
})

export class AdminModule { }
