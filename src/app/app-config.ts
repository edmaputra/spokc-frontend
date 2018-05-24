import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

    public version = '1.0.0';
    public currencyFormat = { style: 'currency', currency: 'IDR' };
    public dateFormat     = { year: 'numeric', month: 'short', day: 'numeric'};

    public apiPort = '9292';
    public apiPath = 'http://localhost';
    public fullApiPath = this.apiPath + ':' + this.apiPort;

    public getAPI() {
        return this.fullApiPath;
    }
}
