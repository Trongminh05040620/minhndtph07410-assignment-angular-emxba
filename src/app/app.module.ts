import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutProductComponent } from './layout-product/layout-product.component';
import { LayoutAdminComponent } from './layout-admin/layout-product-all.component';
import { ProductService } from '../product.service';
import { DashboadComponent } from './dashboad/dashboad.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ProductHeaderComponent, ProductFooterComponent, HomeProductComponent, AdminComponent, LayoutProductComponent, LayoutAdminComponent, DashboadComponent ],
  providers: [ProductService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
