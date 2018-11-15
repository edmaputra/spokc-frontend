import { Component, OnInit, ViewChild, Input, ViewEncapsulation } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

import { Atm } from '../../../model/it-ebanking/atm';
import { AtmService } from '../../../service/it-ebanking/atm.service';
import { ToasterGenerator } from '../../../service/';

import { ToastrService } from 'ngx-toastr';
import { Page, Response } from '../../../model/';

@Component({
  templateUrl: 'atm.component.html',
  styles: ['.pager li.btn:active { box-shadow: none; }'],
  encapsulation: ViewEncapsulation.None
  // styles: ['form {display: flex; flex-direction: column; align-items: flex-end;}']
})

export class AtmComponent implements OnInit {

  public modalHapus;
  atms: Atm[];
  page: Page;
  idHapus: number;
  editId: number = -1;

  search: string = '';
  pageNumber: number = 1;
  size: number = 4;

  @ViewChild('f') form: any;
  atm = new Atm();
  atmOld: string;

  totalElements: number = 16;
  currentPage: number;

  atmV1Url = '/tieb/v1/atm';

  constructor(
    private service: AtmService,
    private toaster: ToastrService,
    private toasterGen: ToasterGenerator) { }

  ngOnInit() {
    this.findAll();
  }

  reset() {
    this.pageNumber = 1;
    this.search = '';
    this.size = 4;
    this.findAll();
    this.form.reset();
  }

  pageChanged(event: any): void {
    this.pageNumber = event.page;
    this.findAll();
  }

  findAll() {
    this.service.getPageable(this.pageNumber + '', this.size + '', this.search).subscribe(
      resp => {
        this.page = resp;
        this.atms = this.page.content;
        this.totalElements = this.page.totalElements;
        this.currentPage = this.page.number + 1;
      }
    );
  }

  delete() {
    if (this.idHapus > 0) {
      const url = this.atmV1Url + '/' + this.idHapus;
      this.service.deleteObservable(url).subscribe(response => {
        this.toaster.info('ID ATM "' + this.idHapus + '" Terhapus', 'Delete Successful');
        this.reset();
        this.idHapus = -1;
      });
    }

  }

  setIdHapus(id: number) {
    this.idHapus = id;
  }

  getAtm(name) {
    if (name) {
      this.service.dapatkan(name).subscribe(
        res => {
          this.atm = res;
          this.atmOld = this.atm.name;
          this.editId = this.atm.id;
        }
      );
    }
  }

  saveAtm() {
    this.atm.office = '07';
    if (this.editId > -1) {
      this.service.putObservable(this.atm, this.atmV1Url).subscribe(
        resp => {
          this.toaster.success(resp.message, resp.details);
          this.findAll();
        }
      );
    } else {
      this.service.postObservable(this.atm, this.atmV1Url).subscribe(
        (resp: Response) => {
          this.toasterGen.show(resp.message, resp.details, resp.informationCode)
          this.findAll();
        }
      );
    }
    this.editId = -1;
    this.form.reset();
  }
}
