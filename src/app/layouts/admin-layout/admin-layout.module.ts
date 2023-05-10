import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { LbdModule } from '../../lbd/lbd.module';
// import { NguiMapModule} from '@ngui/map';
// import { PaginatorModule } from 'primeng/paginator';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

import { ServicesBaseModule } from 'src/assets/lib/service-base/services-base.module';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { DetailsModalComponent } from '../../home/details-modal.component';
import { SearchUserAutocompleteComponent } from '../../shared/components/search-user-autocomplete/search-user-autocomplete.component'
import { CreateUserModalComponent } from '../../user/create-user-modal/create-user-modal.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';

import { BusyIfDirective } from 'src/app/shared/directive/busy-if.directive';
import { CpfCnpjPipe } from 'src/app/shared/directive/cpf-cnpj.pipe';
import { ButtonBusyDirective } from 'src/app/shared/directive/button-busy.directive';
import { ValidationLabelDirective } from 'src/app/shared/directive/validation-label.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    PanelModule,
    AutoCompleteModule,
    InputMaskModule,
    InputNumberModule,

    PaginationModule,

    InputTextModule,
    CheckboxModule,
    CalendarModule,
    TooltipModule,
    // DropdownModule,

    ModalModule.forRoot(),
    ServicesBaseModule,

    ToastrModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    CreateUserModalComponent,
    TablesComponent,
    DetailsModalComponent,
    SearchUserAutocompleteComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent

    BusyIfDirective,
    CpfCnpjPipe,
    ButtonBusyDirective,
    ValidationLabelDirective
  ],
  providers: [
    PaginationConfig,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
    // BsModalRef
  ],
  exports: [
    BusyIfDirective,
    CpfCnpjPipe,
    ButtonBusyDirective,
    ValidationLabelDirective]
})

export class AdminLayoutModule { }