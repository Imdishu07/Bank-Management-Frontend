import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { deposit } from '../../Interface/deposit.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deposit-activity',
  templateUrl: './deposit-activity.component.html',
  styleUrl: './deposit-activity.component.css'
})
export class DepositActivityComponent {

  transactionSubscription!:Subscription
  depositForm!: FormGroup;
  constructor(private transactionServive:TransactionService,private formBuilder: FormBuilder,private toastr: ToastrService){ }

  ngOnInit(): void{
    this.depositForm = this.formBuilder.group({
      accountNo: ['',Validators.required],
      amount: ['',[Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void{
    if(this.depositForm.valid){
      const depositData: deposit = {
        accountNo: this.depositForm.value.accountNo,
        amount: this.depositForm.value.amount
      };
      
      this.transactionSubscription=this.transactionServive.deposit(depositData).subscribe(
        (response: any) => {
          console.log("deposit successful", response);
          this.toastr.success("Deposit Successfull");
        },
        (error) => {
           console.error("Error in Deposit", error)
          this.toastr.error(error.error);
        }
      );
    }
  }

  limitLength(event: any, maxLength: number) {
    const input = event.target.value;
    if (input.length > maxLength) {
      event.target.value = input.slice(0, maxLength);
    }
  }

  ngOnDestroy() : void {
    if(this.transactionSubscription){
      this.transactionSubscription.unsubscribe();
    }
  }
}
