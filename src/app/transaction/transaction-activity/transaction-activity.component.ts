import { Component, OnInit } from '@angular/core';
import { transaction } from '../../Interface/transactiondetails.interface'; // Corrected interface name
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-activity',
  templateUrl: './transaction-activity.component.html',
  styleUrls: ['./transaction-activity.component.css']
})
export class TransactionActivityComponent implements OnInit {
  transactions: transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransaction().subscribe((transactions: transaction[]) => { 
      this.transactions = transactions;
    });
  }
}
