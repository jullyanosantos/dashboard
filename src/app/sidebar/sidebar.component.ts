import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar-service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
  { path: '/user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
  { path: '/table', title: 'Table List', icon: 'pe-7s-note2', class: '' },
  // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
  // { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  // { path: '/url', title: 'Bottom menu',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[] | undefined;
  menus: any[] | undefined;

  constructor(public sidebarService: SidebarService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menus = this.sidebarService.getMenuList();
  }

  gotRoute(route: string) {

    this.sidebarService.goToRoute(`/${route}`);
  }

  getShortName(fullName: string) {
    return fullName.split(' ').map(n => n[0]).join('');
  }
  
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
