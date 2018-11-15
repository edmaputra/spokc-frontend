import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserInfoService } from './user-info.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private userInfoService: UserInfoService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.cekLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    cekLogin(url: string): boolean {
        if (this.userInfoService.sudahMasukkah()) {
            return true;
        }
        // console.log("User is not logged - This routing guard prvents redirection to any routes that needs logging.");
        // Store the original url in login service and then redirect to login page
        // this.loginService.landingPage = url;
        this.router.navigate(['login']);
        return false;
    }
}
