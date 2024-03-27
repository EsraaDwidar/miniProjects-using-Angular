import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
// import { Product } from '../../Types/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // products: Product[] = [];
  constructor(){}
  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe({
  //     next: (eventResult)=>{
  //       this.products = eventResult;
  //     },
  //     error: ()=>{},
      
  //   });
  // }
}
