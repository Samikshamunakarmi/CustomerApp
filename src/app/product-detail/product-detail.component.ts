import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../shared/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [
  ]
})
export class ProductDetailComponent implements OnInit {

  constructor(public service: ProductDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(id: number | string) {
    console.log('id 1', id)
    this.service.deleteProductDetail(id).subscribe(
      res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
