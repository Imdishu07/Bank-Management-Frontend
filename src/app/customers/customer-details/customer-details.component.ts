import { Component, input } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../../Interface/getbyid.interface';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  
  customer: Customer | undefined;
  aadharNumberInput: string = '';
  customerNotFound: boolean = false;
  customersSubscription!: Subscription; 

  constructor(private customersService: CustomersService, private toastr: ToastrService) {}

  getCustomer(): void {
    if (!this.aadharNumberInput) {
      console.log('Aadhar number is required.');
      return;
    }

    this.customersSubscription = this.customersService.getCustomer(this.aadharNumberInput).subscribe(
      (customer: Customer | null) => {
        if (customer) {
          this.customer = customer;
          this.customerNotFound = false;
          this.toastr.success("Customers Displayed");
        } else {
          this.customerNotFound = true;
          this.toastr.error("Error In Retrieving");
        }
      },
      (error) => {
        console.error('Error retrieving customer:', error);
        this.toastr.error(error.error);
      }
    );
  }

  ngOnDestroy() {
    console.log('CustomersActivityComponent ngOnDestroy called');
    if (this.customersSubscription) {
      this.customersSubscription.unsubscribe();
    }
  }

  

}
