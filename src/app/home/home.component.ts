import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsModalComponent } from './details-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalRef!: BsModalRef;
  typeSelected: string;
  public isLoading = false;

  @ViewChild('modalDetalhe') detailsModal!: DetailsModalComponent;

  constructor(
    private spinnerService: NgxSpinnerService
  ) {
    this.showSpinner();
    this.typeSelected = 'ball-fussion';
  }

  // openModal(template: TemplateRef<any>) {
  //    this.modalRef = this.modalService.show(template);
  // }


  showDetails() {
    this.detailsModal.show("Juiano");
  }

  public showSpinner(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // 5 seconds
  }

  ngOnInit(): void {

  }
}