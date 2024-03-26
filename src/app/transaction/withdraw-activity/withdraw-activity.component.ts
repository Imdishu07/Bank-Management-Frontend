import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { withdraw } from '../../Interface/withdraw.interface';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-withdraw-activity',
  templateUrl: './withdraw-activity.component.html',
  styleUrl: './withdraw-activity.component.css'
})
export class WithdrawActivityComponent {
  withdrawForm !: FormGroup;
  constructor(private transactionService:TransactionService, private formBuilder: FormBuilder, private toastr: ToastrService){ }

  ngOnInit(): void{
    this.withdrawForm = this.formBuilder.group({
      accountNo: ['',Validators.required],
      amount: ['',[Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void{
    if(this.withdrawForm.valid){
      const withdrawData: withdraw = {
        accountNo: this.withdrawForm.value.accountNo,
        amount: this.withdrawForm.value.amount
      };

      this.transactionService.withdraw(withdrawData).subscribe(
        (response: any) => {
          console.log("withdraw successful", response);
          this.toastr.success("Withdraw Successfull");
        },
        (error: any) => {
          console.error("error in withdraw", error)
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
}
