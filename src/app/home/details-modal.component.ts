import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html'
})
export class DetailsModalComponent implements OnInit {

  modalRef!: BsModalRef;
  name: string | undefined;
  contentArray: string[] = new Array(50).fill('');
  public returnedArray: string[] = [];
  showBoundaryLinks: boolean = true;
  showDirectionLinks: boolean = true;


  @ViewChild('template') editUserRoleModal!: TemplateRef<ElementRef>;

  constructor(private modalService: BsModalService) { }


  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

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
    this.contentArray = this.contentArray.map((v: string, i: number) => {
      return 'Line ' + (i + 1);
    });
    this.returnedArray = this.contentArray.slice(0, 5);
  }
}
