import * as ngCommon from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
// import { MessageService } from './message/message.service';
// import { NotifyService } from './notify/notify.service';
import { ToastrNotifyService } from './tostr-notify/tostr-notify.service';
// import { AlertService } from './alert/alert.service';

@NgModule({
    declarations: [
    ],

    providers: [
        // NotifyService,
        // MessageService,
        // AlertService,
        ToastrNotifyService
    ]
})
export class ServicesBaseModule { }