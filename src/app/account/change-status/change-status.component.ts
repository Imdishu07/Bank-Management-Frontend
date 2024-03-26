import { Component, OnInit } from '@angular/core';
import { getAccount } from '../../Interface/getaccount.interface';
import { AccountService } from '../account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { updateStatus } from '../../Interface/updateStatus.interface';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css'] 
})
export class ChangeStatusComponent{
  updateForm !: FormGroup;
  accountSubscription!:Subscription

  constructor(private accountService:AccountService,
     private formBuilder: FormBuilder,
     private toastr: ToastrService){ }

  ngOnInit():void{
    this.updateForm=this.formBuilder.group({
      accountNo:['',Validators.required],
      newStatus:['',Validators.required]
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const updateData: updateStatus = {
        accountNo: this.updateForm.value.accountNo,
        newstatus: this.updateForm.value.newStatus,
        
      };
  
      console.log("Submitting update request...");
  
      this.accountSubscription=this.accountService.updateStatus(updateData).subscribe(
        (response: string) => {
          this.toastr.success("Status Changed Successfully")
        },
        (error) => {
          console.log("Error:", error);
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
  
  ngonDestroy() : void{
    if(this.accountSubscription){
      this.accountSubscription.unsubscribe();
    }
  }
}
