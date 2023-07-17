import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductDetail } from 'src/app/shared/product-detail.model';
import { ProductDetailService } from 'src/app/shared/product-detail.service';

@Component({
  selector: 'app-product-detail-form',
  templateUrl: './product-detail-form.component.html',
  styles: [
  ]
})
export class ProductDetailFormComponent implements OnInit {

  constructor(public service: ProductDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postProductDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new ProductDetail();
  }
}
