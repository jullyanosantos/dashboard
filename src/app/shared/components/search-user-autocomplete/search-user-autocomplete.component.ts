import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDropDownList } from '../../_models/user-dropdownlist';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-search-user-autocomplete',
  templateUrl: './search-user-autocomplete.component.html',
  styleUrls: ['./search-user-autocomplete.component.scss']
})
export class SearchUserAutocompleteComponent implements OnInit {
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  selectedUser!: UserDropDownList;
  users: UserDropDownList[] = [];
  filteredUsers: UserDropDownList[] = [];

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {

    this.userService.getUserDropDownList().then(
      (res) => {
        this.users = res.data;
      }
    );
  }

  filterUser(event: any) {

    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.users.length; i++) {

      let user = this.users[i];

      if (user.first_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(user);
      }
    }

    this.filteredUsers = filtered;
  }


  onChange($event: any) {
    debugger
    this.change.emit($event);
  }
}
