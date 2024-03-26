import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './account-home/account-home.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { GetaccountsComponent } from './getaccounts/getaccounts.component';
import { GetInterestComponent } from './get-interest/get-interest.component';

const routes: Routes = [
  {path:'',component:AccountHomeComponent,
  children:[
    {path:"account-deatils",component:GetaccountsComponent},
    {path:"change-status",component:ChangeStatusComponent},
    {path:"get=interest",component:GetInterestComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
