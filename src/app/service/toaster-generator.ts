import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterGenerator {

  constructor(private toaster: ToastrService){}

  show(message?: string, title?: string, code?: string) {
    if (code === 'SUCCESS') {
      this.toaster.success(message, title);
    } else if (code === 'INFO') {
      this.toaster.info(message, title);
    } else if (code === 'WARNING'){
      this.toaster.warning(message, title);
    } else if (code === 'ERROR') {
      this.toaster.error(message, title);
    }
  }

}
