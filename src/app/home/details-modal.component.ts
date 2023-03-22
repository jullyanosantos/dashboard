import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html'
})
export class DetailsModalComponent implements OnInit {

  modalRef!: BsModalRef;
  name: string | undefined;

  @ViewChild('template') editUserRoleModal!: TemplateRef<ElementRef>;

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  show(userName: string) {

    this.name = userName;
    
    this.modalRef = this.modalService.show(
      this.editUserRoleModal,
      Object.assign({}, { class: 'gray modal-xl' })
    );

  }

  ngOnInit(): void {
  }
}
