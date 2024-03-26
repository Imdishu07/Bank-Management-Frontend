import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { getAccount } from '../../Interface/getaccount.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-getaccounts',
  templateUrl: './getaccounts.component.html',
  styleUrls: ['./getaccounts.component.css']
})
export class GetaccountsComponent implements OnInit {
  accounts: getAccount[] = [];
  accountSubscription!:Subscription

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountSubscription=this.accountService.getAccountDetails().subscribe((accounts: getAccount[]) => {
      this.accounts = accounts;
    });
  }  

  ngonDestroy() : void{
    if(this.accountSubscription){
      this.accountSubscription.unsubscribe();
    }
  }
  
}
