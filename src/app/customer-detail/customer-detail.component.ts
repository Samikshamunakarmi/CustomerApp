import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from '../shared/customer-detail.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styles: [
  ]
})
export class CustomerDetailComponent implements OnInit {

  constructor(public service: CustomerDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(id: number | string) {
    console.log('id 1', id)
    this.service.deleteCustomerDetail(id).subscribe(
      res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
