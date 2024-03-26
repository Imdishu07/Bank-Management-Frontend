import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionHomeComponent } from './transaction-home/transaction-home.component';
import { DepositActivityComponent } from './deposit-activity/deposit-activity.component';
import { WithdrawActivityComponent } from './withdraw-activity/withdraw-activity.component';
import { TransactionActivityComponent } from './transaction-activity/transaction-activity.component';

const routes: Routes = [
  {path:'',component:TransactionHomeComponent,
  children:[
    {path:"deposit-activity",component:DepositActivityComponent},
    {path:"withdraw-activity",component:WithdrawActivityComponent},
    {path:"transaction-activity",component:TransactionActivityComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
