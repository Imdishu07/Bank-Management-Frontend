import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

import { getInterest } from '../../Interface/getinterest.interest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { response } from 'express';

import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-interest',
  templateUrl: './get-interest.component.html',
  styleUrl: './get-interest.component.css'
})
export class GetInterestComponent {
  interestForm!:FormGroup;
  interestData!: getInterest
  showTable:boolean=false;
  tableHeaders: string[]=[
    'Interest Amount',
    'Interest Rate',
    'Account Type'
  ]
  accountSubscription!:Subscription
  constructor(private accountService:AccountService, private formBuilder:FormBuilder, private toastr: ToastrService){}

  ngOnInit():void{
    this.interestForm=this.formBuilder.group({
      accountNo:['',Validators.required]
    })
  }

  onSubmit():void{
    if(this.interestForm.valid){
      const accountNoVal = this.interestForm.get('accountNo')?.value;
      console.log(accountNoVal)
      this.accountSubscription = this.accountService.getInterest1(accountNoVal).subscribe(
        (response:HttpResponse<getInterest>)=>{
          this.interestData = response.body!
          this.showTable=true;
          this.toastr.success("Interest Rate Displayed");
          console.log(this.interestData)
        },(error)=>{
          console.log(error);
          this.toastr.error(error.error);
        }
      )
    }
  }

  limitLength(event: any, maxLength: number) {
    const input = event.target.value;
    if (input.length > maxLength) {
      event.target.value = input.slice(0, maxLength); // Keep only the first maxLength characters
    }
  }

  ngonDestroy() : void{
    if(this.accountSubscription){
      this.accountSubscription.unsubscribe();
    }
  }
}
