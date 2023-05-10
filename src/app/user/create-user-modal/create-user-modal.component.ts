import { Component, ElementRef, EventEmitter, Injector, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserInput } from 'src/app/shared/_models/user-input';
import { AppComponentBase } from 'src/app/shared/app-component-base';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss']
})
export class CreateUserModalComponent extends AppComponentBase {

  isBusy = false;

  @ViewChild("createUserModal") createUserModal!: TemplateRef<ElementRef>;
  @Output() modalCreateUserSave: EventEmitter<any> = new EventEmitter<any>();
  public modalRef!: BsModalRef;

  isBsy = false;
  submitted = false;

  form: FormGroup = new FormGroup({
    cpfControl: new FormControl(''),
    firstNameControl: new FormControl('')
  });

  constructor(
    injector: Injector,
    private fb: FormBuilder,
    private modalService: BsModalService
  ) {
    super(injector);
    this.initFormValidation();
  }

  initFormValidation() {
    this.form = this.fb.group({
      cpfControl: ['', Validators.required],
      firstNameControl: ['', Validators.required],
      activeControl: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  show() {
    this.modalRef = this.modalService.show(
      this.createUserModal,
      Object.assign({}, { class: 'primary modal-lg' })
    )
  }

  onSave() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.isBsy = true;

    let user = new UserInput();

    user.cpf = this.form.controls["cpfControl"].value.replace(/\D/g,'');
    user.first_name = this.form.controls["firstNameControl"].value;
  }
}
