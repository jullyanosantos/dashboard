import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { AppComponentBase } from '../shared/app-component-base';
import { DataTableHelper } from '../shared/DataTableHelper';
import { UserDropDownList } from '../shared/_models/user-dropdownlist';
import { UserList } from '../shared/_models/user-list';
import { UserService } from '../shared/_services/user.service';
import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends AppComponentBase implements OnInit {

  @ViewChild("createUserModal") createUserModal!: CreateUserModalComponent;
  selectedUser!: UserDropDownList;
  users: UserList[] = [];
  isLoading = false;

  dataTableHelperUsers: DataTableHelper = new DataTableHelper();

  constructor(
    injector: Injector,
    private userService: UserService
  ) {
    super(injector);
  }

  ngOnInit() {

  }

  getUsers(event?: LazyLoadEvent) {
    debugger
    if (this.selectedUser == undefined) {
      this.tostrNotify.warning("Selecione um usuário.");
      return;
    }

    this.isLoading = true;

    this.userService.getAll().then(
      (res) => {
        this.users = res.data
      }
    ).finally(() => this.isLoading = false)
  }

  showCreateModal(): void {
    this.createUserModal.show();
  }

  onChange($event: any) {
    this.selectedUser = $event;
    this.getUsers();
  }
}
