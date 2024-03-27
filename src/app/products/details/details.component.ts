import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from '../../Types/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService){}
    ngOnInit(): void{
      const productId = this.route.snapshot.paramMap.get('productId')!;
      this.productService.getById(productId).subscribe({
        next:(product) =>{
          this.product = product;
        },
        error:()=>{}
      });
    }
}
