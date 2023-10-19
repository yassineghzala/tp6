import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit{
  public Products: Product[] = []
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.Products = this.productService.getProducts()
  }
  
}
