import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id:number;
  product: any;
  constructor(private actRouter:ActivatedRoute,private productService:ProductService) { 
    this.id = this.actRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.actRouter.params.subscribe(params => {
      this.id = params['id'];
      this.productService.getProductById(this.id).subscribe(product => {
        this.product = product;
      })
  });
}

}
