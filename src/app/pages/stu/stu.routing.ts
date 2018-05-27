import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuComponent } from './stu.component';

const routes: Routes = [
  {
    path: '',
    component: StuComponent,
    data: {
      title: 'Serah Terima User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StuRoutingModule {}
