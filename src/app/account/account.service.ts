import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAccount } from '../Interface/getaccount.interface';
import { updateStatus } from '../Interface/updateStatus.interface';
import { getInterest } from '../Interface/getinterest.interest';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<getAccount[]>{
    return this.http.get<getAccount[]>('http://localhost:5121/api/Account/GetAccounts');
  }

  private baseUrl: string = 'http://localhost:5121/api/Account/UpdateStatus';
  updateStatus(data:updateStatus):Observable<any>{
    return this.http.put(`${this.baseUrl}`,data,{responseType:'text'})
  }

  getInterest1(accountNo: number): Observable<HttpResponse<getInterest>> {
    return this.http.get<getInterest>(`http://localhost:5121/api/Account/GetInterest/${accountNo}`,{observe:"response"});
  }  
}