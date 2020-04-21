import { Component, OnInit } from '@angular/core';
import { Model } from '../Model/model';
import { ProductService } from '../../product.service';
ProductService
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productALL: Model;
  load() {
    this.productService.getProduct().subscribe(
      (getAll) => {
        this.productALL=getAll;
      }
    )
  }

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
     this.load();
  }

}