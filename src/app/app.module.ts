import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetailFormComponent } from './customer-detail/customer-detail-form/customer-detail-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailFormComponent } from './product-detail/product-detail-form/product-detail-form.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerDetailComponent },
  { path: 'products', component: ProductDetailComponent },
  { path: 'orders/:customerId', component: OrderDetailComponent },
  { path: '**', component: CustomerDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    CustomerDetailFormComponent,
    ProductDetailComponent,
    ProductDetailFormComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
