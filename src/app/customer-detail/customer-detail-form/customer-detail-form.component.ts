import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerDetail } from 'src/app/shared/customer-detail.model';
import { CustomerDetailService } from 'src/app/shared/customer-detail.service';

@Component({
  selector: 'app-customer-detail-form',
  templateUrl: './customer-detail-form.component.html',
  styles: [
  ]
})
export class CustomerDetailFormComponent implements OnInit {

  constructor(public service: CustomerDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postCustomerDetail().subscribe(
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
    this.service.formData = new CustomerDetail();
  }
}
