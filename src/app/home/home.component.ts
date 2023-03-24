import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsModalComponent } from './details-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppComponentBase } from '../shared/app-component-base';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface Parceiro {
  code: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppComponentBase implements OnInit {

  public parceiros: Parceiro[] = [];
  selectedParceiro: Parceiro | undefined;

  modalRef!: BsModalRef;
  typeSelected: string;
  public isLoading = false;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    startDateControl: new FormControl('')
  });
  submitted = false;

  date = new Date();

  first: number = 0;
  rows: number = 10;

  bsValue = new Date();
  bsRangeValue!: Date[];
  maxDate = new Date();
  minDate = new Date();


  @ViewChild('modalDetalhe') detailsModal!: DetailsModalComponent;

  constructor(
    injector: Injector,
    private fb: FormBuilder
  ) {
    super(injector);
    this.showSpinner();
    this.typeSelected = 'ball-fussion';

    this.form = this.fb.group({
      username: ['', Validators.required],
      startDateControl: ['', Validators.required]

    });

    this.tostrNotify.show("sfs");

    this.initDate();

    this.parceiros = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

  }

  // openModal(template: TemplateRef<any>) {
  //    this.modalRef = this.modalService.show(template);
  // }

  initDate() {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  onPageChange(event?: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  showDetails() {
    this.detailsModal.show("Juiano");
    // this.tostrNotify.show("Sucesso!");
  }

  public showSpinner(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // 5 seconds
  }

  ngOnInit(): void {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(formSave: any) {
    debugger
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}