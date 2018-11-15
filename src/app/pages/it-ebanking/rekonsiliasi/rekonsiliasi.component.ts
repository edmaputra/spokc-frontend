import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Atm } from '../../../model/it-ebanking/atm';
import { AtmTransaction } from '../../../model/it-ebanking/atm-transaction';
import { AtmDetail } from '../../../model/it-ebanking/atm-detail';
import { AtmFind } from '../../../model/it-ebanking/atm-find';
import { AtmDate } from '../../../model/it-ebanking/atm-date';

import { Page } from '../../../model/page';
import { Response } from '../../../model/response';

import { AtmService } from '../../../service/it-ebanking/atm.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'rekonsiliasi.component.html'
})

export class RekonsiliasiComponent implements OnInit {

  atms: Atm[];
  page: Page;
  atmTanggalList: Page;
  selectedDate: string;
  atm: Atm;
  atmTransaction: AtmTransaction;
  atmDetail: AtmDetail;
  atmName: string;
  atmDate: Date;
  ejFiles: string[] = [];
  glFiles: string[] = [];
  loading = false;
  uploadLoading = false;
  tanggalLoading = false;
  response: Response;

  ejDifferencesNoData = true;
  glDifferencesNoData = true;

  ejDifferences: AtmTransaction[];
  glDifferences: AtmTransaction[];

  status: string = '';
  atmDates: AtmDate[];
  atmDateInput = new AtmDate();

  forSave = true;

  @ViewChild('f') form: any;

  constructor(private atmService: AtmService, private toaster: ToastrService) { }

  ngOnInit() {
    this.loadAtm();
    this.loadTanggalAtm();
  }

  loadAtm() {
    this.loading = true;
    this.atmService.dapatkanSemua().subscribe(
      resp => {
        this.page = resp;
        this.atms = this.page.content;
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  loadTanggalAtm() {
    this.loading = true;
    this.atmService.loadRekonsiliasiTanggal().subscribe(
      resp => {
        this.atmTanggalList = resp;
        this.atmDates = this.atmTanggalList.content;
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  getDateRecon(id) {
    this.atmService.dapatkanAtmReconDateById(id).subscribe(
      resp => {
        this.atmDateInput = resp;
        this.atmDateInput.oldDate = new Date(resp.oldDate);
        this.atmDateInput.newDate = new Date(resp.newDate);

      },
      err => {
        console.log(err);
      }
    );
  }

  hapusDateRecon(id) {
    this.atmService.hapusAtmReconDateById(id).subscribe(
      resp => {
        this.loadTanggalAtm();
      },
      err => {
        console.log(err);
      }
    );
  }

  findRecon() {
    this.status = '';
    this.ejDifferencesNoData = true;
    this.glDifferencesNoData = true;
    this.loading = true;
    this.atmService.dapatkanRekonsiliasiAtm(this.atmName, this.parseDate(this.atmDate)).subscribe(
      (resp) => {
        this.ejDifferences = resp.ejDifferences;
        this.glDifferences = resp.glDifferences;
        if (resp.atmEjs.length < 1) {
          this.status = 'EJournal untuk Tanggal ini tidak ada / belum diupload \n';
        }

        if (resp.atmGls.length < 1) {
          this.status = this.status + 'GL 11003 untuk Tanggal ini tidak ada / belum diupload';
        }

        if (this.ejDifferences.length > 0) {
          this.ejDifferencesNoData = false;
        }

        if (this.glDifferences.length > 0) {
          this.glDifferencesNoData = false;
        }
        this.loading = false;
      },
      err => {
        this.toaster.error(err);
        this.loading = false;
      }
    );
  }

  ejUpload() {
    this.upload(this.ejFiles, 0);
  }

  glUpload() {
    this.upload(this.glFiles, 1);
  }

  upload(files: string[], operation: number) {
    this.uploadLoading = true;
    const frmData = new FormData();
    let url = '';
    let resp: Response = new Response();

    for (var i = 0; i < files.length; i++) {
      if (operation === 0) {
        frmData.append("ej-files", files[i]);
        url = '/v1/ej';
      } else {
        frmData.append("gl-files", files[i]);
        url = '/v1/gl';
      }
    }

    this.atmService.ejGlUpload(frmData, url).subscribe(result => {
      if (result) {
        this.uploadLoading = false;
        resp = result;
        this.toaster.success(resp.message + ' transaksi tersimpan');
        files = [];
      }
    }, err => {
      this.uploadLoading = false;
      this.toaster.error(err);
      files = [];
    });

  }

  ejFilesDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.ejFiles.push(e.target.files[i]);
    }
  }

  glFilesDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.glFiles.push(e.target.files[i]);
    }
  }

  simpanTanggal() {
    if (this.form.valid) {
      this.save();
      this.form.reset();
    }
  }

  save() {
    if (this.atmDateInput.id) {
      this.atmService.updateRekonsiliasiTanggal(this.atmDateInput).subscribe(
        resp => {
          this.loadTanggalAtm();
          this.toaster.success(resp.message, resp.details);
        },
        err => {
          this.toaster.error(err);          
        }
      );
    } else {
      this.atmService.simpanRekonsiliasiTanggal(this.atmDateInput).subscribe(
        resp => {
          this.loadTanggalAtm();
          this.toaster.success(resp.message, resp.details);
        },
        err => {
          this.toaster.error(err);
        }
      );
    }
  }

  rekonsiliasiTanggal() {
    let resp: Response = new Response();
    this.tanggalLoading = true;
    this.atmService.updateRekonsiliasiTanggalList().subscribe(result => {
      if (result) {
        this.tanggalLoading = false;
        resp = result;
        this.toaster.success(resp.message + ' Tanggal EJ Terupdate');
      }
    }, err => {
      this.tanggalLoading = false;
      this.toaster.error(err);
    });
  }

  private parseDate(date: Date): string {
    const d = date.getDate() + '';
    const dd = d.length == 1 ? '0' + d : d;
    const m = date.getMonth() + 1 + '';
    const mm = m.length == 1 ? '0' + m : m;
    const y = date.getFullYear();
    return dd + '-' + mm + '-' + y;
  }
}
