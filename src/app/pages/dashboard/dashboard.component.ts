import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfoService } from '../../service';

@Component({
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {

  constructor(private router: Router, private userInforService: UserInfoService) {}

  keluar() {
    console.log('Dashboard:keluar');
    this.userInforService.hapusUserInfo();
    this.router.navigate(['login']);
  }

}
