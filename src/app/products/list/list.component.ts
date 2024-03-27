import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import  Product  from '../../Types/Product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next:(products) =>{ 
        this.products = products;
      },
      error:()=>{},
    });
  }
}
