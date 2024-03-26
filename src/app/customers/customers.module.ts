import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CustomersActivityComponent } from './customers-activity/customers-activity.component';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { FormsModule } from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersService } from './customers.service';
import { RupeePipe } from '../pipes/rupee.pipe';
import { AadharFormatPipe } from '../pipes/aadhar-format.pipe';

@NgModule({
  declarations: [
    AddCustomersComponent,
    CustomersActivityComponent,
    CustomersHomeComponent,
    CustomerDetailsComponent,
    AadharFormatPipe,
    RupeePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule
  ] 
})
export class CustomersModule { }
