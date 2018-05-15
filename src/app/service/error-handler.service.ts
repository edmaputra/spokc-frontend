import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from './alert.service';

@Injectable()
export class ErrorHandlerService {

    // errMsg: string = '';

    constructor(private alertService: AlertService) {}

    public handleError(error: HttpErrorResponse) {
        // this.alertService.error(error.error.error_description);
        // console.error(error.error.error_description);
        // switch (error.status) {
        //       case 401:
        //         this.errMsg = 'Username or password is incorrect';
        //         break;
        //       case 404:
        //         this.errMsg = 'Service not found';
        //         break;
        //       case 408:
        //         this.errMsg = 'Request Timeout';
        //         break;
        //       case 500:
        //         this.errMsg = 'Internal Server Error';
        //         break;
        //       default:
        //         this.errMsg = 'Server Error';
        //     }
            // console.log(this.errMsg);
        console.log(error.error.error_description || error.message || 'Server error');
        return Observable.throw(error.error.error_description || error.message || 'Server error');
      }

}
