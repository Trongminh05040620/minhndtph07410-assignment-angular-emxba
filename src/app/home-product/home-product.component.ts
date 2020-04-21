import { Component, OnInit } from '@angular/core';
import { Model } from '../Model/model';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {
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