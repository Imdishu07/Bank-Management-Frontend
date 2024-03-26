import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { WithdrawActivityComponent } from './withdraw-activity/withdraw-activity.component';
import { DepositActivityComponent } from './deposit-activity/deposit-activity.component';
import { TransactionActivityComponent } from './transaction-activity/transaction-activity.component';
import { TransactionHomeComponent } from './transaction-home/transaction-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WithdrawActivityComponent,
    DepositActivityComponent,
    TransactionActivityComponent,
    TransactionHomeComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TransactionModule { }
