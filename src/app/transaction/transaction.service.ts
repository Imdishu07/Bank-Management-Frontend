import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deposit } from '../Interface/deposit.interface';
import { Observable } from 'rxjs';
import { withdraw } from '../Interface/withdraw.interface';
import { response } from 'express';
import { transaction } from '../Interface/transactiondetails.interface';
import { addcustomer } from '../Interface/addcustomer.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  deposit(data: deposit): Observable<string>{
    return this.http.post("http://localhost:5121/api/Transaction/deposit", data, {responseType : "text"})
  }

  withdraw(data: withdraw): Observable<string>{
    return this.http.post("http://localhost:5121/api/Transaction/withdraw", data, {responseType : "text"})
  }

  getTransaction():Observable<transaction[]>{
    return this.http.get<transaction[]>('http://localhost:5121/api/Transaction/transactions');
  }

  
}
