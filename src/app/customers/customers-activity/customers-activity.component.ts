import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'; 
import { Customer } from '../../Interface/getcustomer.interface';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers-activity',
  templateUrl: './customers-activity.component.html',
  styleUrls: ['./customers-activity.component.css'] 
})
export class CustomersActivityComponent implements OnDestroy { 
  @Output() customerDeleted = new EventEmitter<string>();
  customers: Customer[] = [];
  customersSubscription!: Subscription; 

  constructor(private customersService: CustomersService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(){ 
    this.customersSubscription = this.customersService.getCustomers().subscribe((customer: Customer[]) => {
      this.customers = customer;
    });
  }

  ngOnDestroy() {
    console.log('CustomersActivityComponent ngOnDestroy called');
    if (this.customersSubscription) {
      this.customersSubscription.unsubscribe();
    }
  }

  deleteCustomer(aadharNumber: string): void {
    this.customersSubscription = this.customersService.deleteCustomer(aadharNumber).subscribe(
      (response: string) => {
        if (response.match("success")) {
          this.customers = this.customers.filter(customer => customer.aadharNumber !== aadharNumber);
          console.log('Customer deleted successfully.');
          this.toastr.success("Deleted Successfully");
        } else {
          console.log("customer not found ");
          this.toastr.error("Problem In Deleting");
        }
      },
      (error) => {
        console.error('Error deleting customer:', error);
        this.toastr.error(error.error);
      }
    );
  }
  
  showCustomer(aadharNumber: string): void {
    console.log(aadharNumber);
    this.router.navigate(['customer/add-customers'], { queryParams: { aadharNumber: aadharNumber } });
  }
}
