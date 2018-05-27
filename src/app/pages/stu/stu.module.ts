import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StuComponent } from './stu.component';
import { StuRoutingModule } from './stu.routing';
import { StuService } from '../../service/stu/stu.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StuRoutingModule
  ],
  declarations: [
      StuComponent
  ],
  providers: [
      StuService
  ]
})
export class StuModule { }
