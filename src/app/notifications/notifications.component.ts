import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showNotification('top','right');
  }
  
  showNotification(from: any, align: any){
      const type = ['','info','success','warning','danger'];

      var color = Math.floor((Math.random() * 4) + 1);
      $.notify({
          icon: "pe-7s-gift",
          message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
      },{
          type: type[color],
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
  }
}
