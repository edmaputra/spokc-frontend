import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfoService } from '../../service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

  constructor(private router: Router, private userInforService: UserInfoService) {}

  keluar() {
    this.userInforService.hapusUserInfo();
    this.router.navigate(['login']);
  }

}
