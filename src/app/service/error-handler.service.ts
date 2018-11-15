import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

import { HttpErrorResponse } from '@angular/common/http';

import { ToasterGenerator } from './toaster-generator';

@Injectable()
export class ErrorHandlerService {

    errMsg: string;

    constructor(private toastr: ToasterGenerator) {}

    public getErrorMessage() {
        return this.errMsg;
    }

    public handleError(error: HttpErrorResponse) {
        const message = error.error.message;
        const title = error.statusText;
        const code = error.error.informationCode;
        this.toastr.show(message, title, code);
        this.errMsg = (error.error.error_description || error.message || 'Server error');

        return Observable.throw(this.errMsg);
      }

}
