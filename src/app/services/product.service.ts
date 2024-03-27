import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  Product  from '../Types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client: HttpClient) { }
  // getProducts() : Observable<Product[]>{
  //   return this.client.get<Product[]>('https://jsonplaceholder.typicode.com/posts');
  //https://fakestoreapi.com/products,http://localhost:4200/api/products
  // }
  getAll(): Observable<Product[]>{
    return this.client.get<Product[]>('https://fakestoreapi.com/products');
  }
  getById(id:string): Observable<Product>{
    return this.client.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
