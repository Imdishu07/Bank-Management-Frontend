import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CustomersActivityComponent } from './customers-activity/customers-activity.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {path:'',component:CustomersHomeComponent,
    children:[
      {path:"add-customers",component:AddCustomersComponent},
      {path:"customers-activity",component:CustomersActivityComponent},
      {path:"customer-details",component:CustomerDetailsComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
