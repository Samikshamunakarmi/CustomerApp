import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerDetail } from './customer-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:7225/api/Customers';
  formData: CustomerDetail = new CustomerDetail();
  customerList: CustomerDetail[] = [];

  postCustomerDetail() {
    console.log('Submit Action to ', this.baseUrl);
    console.log('this.formData =====', this.formData)
    return this.http.post(this.baseUrl, this.formData);
  }

  refreshList() {
    console.log('Submit Action to ', this.baseUrl);
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.customerList = res as CustomerDetail[]);
  }

  deleteCustomerDetail(id: number | string) {
    console.log('id', id)
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
