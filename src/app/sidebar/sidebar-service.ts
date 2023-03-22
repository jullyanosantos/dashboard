import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    constructor(private router: Router) { }

    menus = [
        { path: '/dashboard', title: 'Dashboard', icon: 'nc-icon nc-app', class: '' },
        {
            title: 'User Profile',
            path: '/user',
            icon: 'nc-icon nc-app',
            active: true,
            type: 'simple',
            permission: ['Pages.Users'] //define se será exibido no menu
        },
        {
            title: 'Table List',
            path: '/table',
            icon: 'nc-icon nc-app',
            active: true,
            type: 'simple',
            permission: ['Pages.Roles']
        },
        {
            title: 'E-commerce',
            icon: 'nc-icon nc-app',
            active: true,
            type: 'dropdown',
            badge: {
                text: '3',
                class: 'badge-danger'
            },
            submenus: [
                {
                    title: 'Products',
                    path: '/dashboard'
                },
                {
                    title: 'Orders',
                    path: '/dashboard'
                },
                {
                    title: 'Credit cart',
                    path: '/dashboard',
                }
            ]
        }
    ];

    getMenuList() : any[]{
        return this.menus;
    }

    goToRoute(path: string) {
        this.router.navigate([`/${path}`])
    }
}