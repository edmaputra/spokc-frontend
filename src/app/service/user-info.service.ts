import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
// import * as jwtDecode from 'jwt-decode';
// import 'rxjs/add/operator/catch';

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

    sudahMasukkah(): boolean {
        return this.storage.getItem(this.currentUserKey) ? true : false;
    }

    dapatkanUserInfo() {
        console.log(this.storage.getItem(this.currentUserKey));
        console.log(JSON.parse(this.storage.getItem(this.currentUserKey)));
    }

}
