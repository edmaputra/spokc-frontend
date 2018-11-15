import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '../model/user/token';

@Injectable()
export class UserInfoService {

  public currentUserKey = 'access_token';
  public currentRefreshKey = 'refresh_token';
  public currentRegion = 'region';
  public storage: Storage = sessionStorage;


  constructor() { }

  simpanUserInfo(tokenJwt: any) {
    this.storage.setItem(this.currentUserKey, tokenJwt);
  }

  saveUserInfo(accessToken: string, refreshToken: string, region: string) {
    this.storage.setItem(this.currentUserKey, accessToken);
    this.storage.setItem(this.currentRefreshKey, refreshToken);
    this.storage.setItem(this.currentRegion, region);
  }

  hapusUserInfo() {
    this.storage.removeItem(this.currentUserKey);
  }

  deleteUserInfo(){
    this.storage.removeItem(this.currentUserKey);
    this.storage.removeItem(this.currentRefreshKey);
    this.storage.removeItem(this.currentRegion);

  }

  dapatkanToken() {
    return this.storage.getItem(this.currentUserKey);
  }

  getAccessToken() {
    return this.storage.getItem(this.currentUserKey);
  }

  getRefreshToken() {
    return this.storage.getItem(this.currentRefreshKey);
  }

  getUserRegion() {
    return this.storage.getItem(this.currentRegion);
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
