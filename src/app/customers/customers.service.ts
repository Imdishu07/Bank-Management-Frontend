import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Interface/getcustomer.interface';
import { addcustomer } from '../Interface/addcustomer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  addCustomer(data: addcustomer): Observable<string> {
    return this.http.post("http://localhost:5121/api/Customer/AddCustomer", data, { responseType: 'text' });
  }
  

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:5121/api/Customer/GetAllCustomers'); // Adjust the URL as per your backend API endpoint
  }

  deleteCustomer(aadharNumber: string): Observable<string> {
    const url = `http://localhost:5121/api/Customer/${aadharNumber}`;
    return this.http.delete(url,{responseType:'text'});
  }

  private apiUrl = 'http://localhost:5121/api/Customer';

  getCustomer(aadharNumber: string): Observable<Customer> {
    const url = `${this.apiUrl}/${aadharNumber}`;
    return this.http.get<Customer>(url);
  }

  updateCustomerwithAccount(aadharNumber: number, body: addcustomer): Observable<string> {
    console.log(aadharNumber);
    const url = `http://localhost:5121/api/Customer/${aadharNumber}`;
    return this.http.put(url, body, { responseType: 'text' });
  }  
  
}
