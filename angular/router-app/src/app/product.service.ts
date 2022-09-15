import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getProductById(id:number){
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createProduct(product:any){
    return this.http.post<any>(`${this.baseUrl}`, product);
  }

  updateProduct(id:number,product:any){
    return this.http.put<any>(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id:number){
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

}
