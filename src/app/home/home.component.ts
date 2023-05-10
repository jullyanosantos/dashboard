import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsModalComponent } from './details-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppComponentBase } from '../shared/app-component-base';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationMessageService } from '../shared/directive/validation-msg.service';


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
    private fb: FormBuilder,
    private validErrorMsgService: ValidationMessageService,
    private el: ElementRef,
    private ren: Renderer2
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
    this.formContentFunc();
    this.validationErrorMsg();
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

  formContent : any= {"username": "Conteudo"};
  formErrorsArr = [];
  title: String = "";
  fieldInfoMsgArr: any[] = [];
  errors: any;
  isFieldExit = false;
  @Output() formErrorsCount: EventEmitter<any> = new EventEmitter();


  formContentFunc() {

    this.formContent = ["username"];
    // this.createForm();
  }

  validationErrorMsg() {

    debugger
    if (this.validErrorMsgService.validationErrorObj.length === 0) {
      this.fieldInfoMsgArr = ["username"];
    }
  }
  formErrorsEvent(evt: any) {
    debugger
    this.errors = evt;
  }

  verifyForm() {
    const cloneErrors = this.errors;
    console.log(this.form.controls);
    Object.keys(this.form.controls).forEach(key => {
      this.el.nativeElement.querySelector('#' + key).classList.add('errorfield');
      this.el.nativeElement.querySelector('#' + key).parentElement.querySelector('label').classList.add('errorlabel');
      const obj = { fieldName: key };
      if (cloneErrors.length > 0) {
        for (let i = 0; i < cloneErrors.length; i++) {
          if (cloneErrors[i].fieldName === key) {
            this.isFieldExit = true;
          }
        }
      }
      if (!this.isFieldExit) {
        this.errors.push(obj);
      }

      this.isFieldExit = false;
    });
    this.formErrorsCount.emit(this.errors);
  }

}