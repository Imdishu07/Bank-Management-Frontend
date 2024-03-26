import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';

import { CustomersService } from '../customers.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {
  formData: any = {};
  aadharNumber: string | undefined;
  isEditing: boolean = false;
  heading: string = 'Add Customer';
  customersSubscription!: Subscription; 
  

  constructor(
    private customerService: CustomersService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.setupFormData();
  }

  setupFormData(): void {
    this.route.queryParams.subscribe(params => {
      this.aadharNumber = params['aadharNumber'] || undefined;
      if (this.aadharNumber) {
        this.isEditing = true;
        this.heading = 'Edit Customer';
        console.log('Received Id', this.aadharNumber);
        this.loadData(Number(this.aadharNumber));
      } else {
        this.isEditing = false;
        this.resetFormData();
      }
    });
  }

  loadData(aadharNumber: number): void {
    this.customersSubscription = this.customerService.getCustomer(String(aadharNumber)).subscribe(
      (customer) => {
        this.formData = customer;
        this.formData.dateOfBirth = formatDate(customer.dateOfBirth, 'yyyy-MM-dd', 'en-US');      
      },
      (error) => {
        console.log(error);
      }
    );
  }

  resetFormData(): void {
    this.heading = 'Add Customer';
    this.formData = {};
  }

  submitForm(form: NgForm): void {
    console.log(this.formData);
    console.log(this.aadharNumber);
    if (form.valid) {
      if (this.isEditing && this.aadharNumber) {
        this.customerService.updateCustomerwithAccount(Number(this.aadharNumber), this.formData).subscribe(
          (response) => {
            console.log(response);
            this.toastr.success('Customer Updated Successfully');
          },
          (error) => {
            console.log(error);
            this.toastr.error(error.error);
            this.router.navigate(["customer/customers-activity"]);
          }
        );
      } else {
        this.customerService.addCustomer(this.formData).subscribe(
          (response) => {
            console.log("Response from server: ", response);
            this.toastr.success('Customer Added Successfully');
            this.router.navigate(["customer/customers-activity"]);
          },
          (error) => {
            console.log("Error: ", error);
            this.toastr.error(error.error);
          }
        );
      }
    } else {
      console.log("Form is invalid");
      this.toastr.error("Customer Not Added! Check Details");
    }
  }
  
  limitInputLength2(event: any): void {
    const maxLength = 12;
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
  }
  
  ngOnDestroy(): void {
    if (this.customersSubscription) {
      this.customersSubscription.unsubscribe();
    }
  }
}
