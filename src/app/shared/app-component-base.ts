import { Injector } from '@angular/core';
import { ToastrNotifyService } from '../../assets/lib/service-base/tostr-notify/tostr-notify.service';

export abstract class AppComponentBase {

    // tostrNotify: ToastrNotifyService;
    
    constructor(injector: Injector) {
    
        // this.tostrNotify = injector.get(ToastrNotifyService);
    }
}