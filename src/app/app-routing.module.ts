import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent, SimpleLayoutComponent } from './containers';
import { AuthGuard } from './service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Beranda'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    component: SimpleLayoutComponent,
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'admin',
    component: FullLayoutComponent,
    loadChildren: './pages/admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
