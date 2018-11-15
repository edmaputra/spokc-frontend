import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  public version = '1.0.0';
  public currencyFormat = { style: 'currency', currency: 'IDR' };
  public dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };

  private itEbankingApiPort = '11002';
  private apiPort = '9292';
  private apiPath = 'http://localhost';
  private fullApiPath = this.apiPath + ':' + this.apiPort;

  public getAPI() {
    return this.fullApiPath;
  }

  public getItEbankingApi() {
    return this.apiPath + ':' + this.itEbankingApiPort + '/tieb';
  }

  public getItEbankingApiProxy() {
    return '/tieb';
  }
}
