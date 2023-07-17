import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../shared/order-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styles: [
  ]
})
export class OrderDetailComponent implements OnInit {

  constructor(public service: OrderDetailService, private route: ActivatedRoute) { }

  customerId: number | string = ''

  ngOnInit(): void {
    console.log('service', this.service.orderList)
    this.route.params.subscribe(
      params => {
        console.log('params', params)
        if (params.customerId) {
          this.customerId = params.customerId
          this.service.refreshOrderList(params.customerId);
        }
      }
    )
    this.service.refreshProductList();
  }

  onDelete(orderId: number | string) {
    this.service.deleteOrder(orderId).subscribe(
      res => {
        console.log('deleted order');
        this.service.refreshOrderList(this.customerId);
      },
      err => {
        console.log(err);
      }
    )
  }

  onAddToOrder(productId: number | string) {
    this.service.addToOrder(this.customerId, productId).subscribe(
      res => {
        this.service.refreshOrderList(this.customerId);
      },
      err => console.log(err)
    );
  }
}
