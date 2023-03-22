import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { LbdModule } from '../../lbd/lbd.module';
// import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { DetailsModalComponent } from '../../home/details-modal.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { BusyIfDirective } from 'src/app/shared/directive/busy-if.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,

    ModalModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    DetailsModalComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent

    BusyIfDirective
  ],
  providers: [
    // BsModalRef
  ],
  exports: [BusyIfDirective]
})

export class AdminLayoutModule { }