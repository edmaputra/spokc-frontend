import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UserInfoService {

    public currentUserKey: string = 'currentUser';
    public storage: Storage = sessionStorage;

    constructor() {}

    simpanUserInfo(userInfoString: string) {
        this.storage.setItem(this.currentUserKey, userInfoString)
    }

    hapusUserInfo() {
        this.storage.removeItem(this.currentUserKey);
    }

    dapatkanToken() {
        return this.storage.getItem(this.currentUserKey);
    }

    sudahMasukkah(): boolean {
        const helper = new JwtHelperService();
        const token = this.dapatkanToken();
        return !helper.isTokenExpired(token);
    }

    dapatkanUserInfo() {
        console.log(this.storage.getItem(this.currentUserKey));
        console.log(JSON.parse(this.storage.getItem(this.currentUserKey)));
    }

}
