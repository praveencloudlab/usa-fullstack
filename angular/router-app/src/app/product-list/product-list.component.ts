import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private _productService: ProductService,private router: Router) { }

  deleteProduct(id:number){
    
    this._productService.deleteProduct(id).subscribe(resp=>{
      console.log(resp);
      
    });
   
    this.router.navigate(['/']);
    
  }


  ngOnInit(): void {
    this._productService.getProducts().subscribe(products => {
      this.products = products;
   });
  }
}
