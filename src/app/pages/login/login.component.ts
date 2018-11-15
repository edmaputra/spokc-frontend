import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { LoginService } from './login.service';
import { User } from '../../model/user/user';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  pengguna = new User();
  pesan = '';
  salah = false;
  loading = false;
  loginButton = 'Login';
  @ViewChild('f') form: any;

  constructor(private auth: LoginService, private router: Router,
    private toaster: ToastrService) { }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.loadingTrue()
      this.auth.login(this.pengguna.username, this.pengguna.password)
        .subscribe(result => {
          if (result) {
            this.router.navigate(['/dashboard']);
            this.loadingFalse();
          }
        }, err => {
          this.salah = true;
          this.toaster.error(err);
          this.loadingFalse();
        });
    }
  }

  loadingTrue() {
    this.loading = true;
    this.loginButton = 'Please Wait';
  }

  loadingFalse() {
    this.loading = false;
    this.loginButton = 'Login';
    this.form.reset();
  }
}
