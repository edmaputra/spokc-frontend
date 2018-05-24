import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { LoginService } from './login.service';
import { Pengguna } from '../../model/user/pengguna';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  pengguna = new Pengguna();
  pesan = '';
  salah = false;
  loading = false;
  loginButton = 'Login';
  @ViewChild('f') form: any;

  constructor(private auth: LoginService, private router: Router) {}

  login() {
    if (this.form.valid) {
      this.loadingTrue();
      this.auth.login(this.pengguna.username, this.pengguna.password)
        .subscribe(result => {
          if (result) {
            this.router.navigate(['/dashboard']);
            this.loadingFalse();
          }
        }, err => {
          this.salah = true;
          this.pesan = err;
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
