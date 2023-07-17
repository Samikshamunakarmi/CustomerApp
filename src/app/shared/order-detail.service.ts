import { Injectable } from '@angular/core';
import { OrderDetail } from './order-detail.model';
import { HttpClient } from '@angular/common/http';
import { ProductDetail } from './product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:7225/api/CustomerOrder';
  orderList: OrderDetail = {
    customer_Name: '',
    orders: []
  }
  productList: ProductDetail[] = [];

  refreshOrderList(customerId: number | string) {
    return this.http.get(`${this.baseUrl}/${customerId}`)
      .toPromise()
      .then(
        res => {
          return this.orderList = res as OrderDetail
        }
      )
      .catch(
        err => console.log(err)
      )
  }

  deleteOrder(customerId: number | string) {
    return this.http.delete(`${this.baseUrl}/${customerId}`);
  }

  refreshProductList() {
    return this.http.get('https://localhost:7225/api/Product')
      .toPromise()
      .then(res => this.productList = res as ProductDetail[]);
  }

  addToOrder(customerId: number | string, productId: number | string) {
    console.log('Add to Order', { customerId, productId });
    return this.http.post(this.baseUrl, { customerId, productId });
  }
}
