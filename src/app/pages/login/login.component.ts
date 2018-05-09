import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  username: string;
  password: string;

  constructor(private auth: LoginService, private router: Router) { }

  login() {
    this.auth.login(this.username, this.password)
    .subscribe(result => {
      if (result === true) {
          this.router.navigate(['/dashboard']);
      } else {
        console.log('not ok');
      }
    });
  }
}
