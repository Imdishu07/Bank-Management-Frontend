import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetaccountsComponent } from './getaccounts/getaccounts.component';
import { GetInterestComponent } from './get-interest/get-interest.component';


@NgModule({
  declarations: [
    ChangeStatusComponent,
    AccountHomeComponent,
    GetaccountsComponent,
    GetInterestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
