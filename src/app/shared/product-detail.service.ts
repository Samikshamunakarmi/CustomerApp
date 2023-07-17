import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDetail } from './product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:7225/api/Product';
  formData: ProductDetail = new ProductDetail();
  productList: ProductDetail[] = [];

  postProductDetail() {
    console.log('Submit Action data ', this.formData);
    return this.http.post(this.baseUrl, this.formData);
  }

  refreshList() {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.productList = res as ProductDetail[]);
  }

  deleteProductDetail(id: number | string) {
    console.log('id', id)
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
