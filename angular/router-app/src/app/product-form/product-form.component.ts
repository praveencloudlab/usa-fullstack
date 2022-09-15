import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 
  productForm!: FormGroup;
  isSubmited=false;
  id: any;
  product: any;
  btnLabel='Submit';


 constructor(private actRouter:ActivatedRoute,private fb: FormBuilder,private productService:ProductService,private router: Router) {
  this.id = this.actRouter.snapshot.params['id'];   // BL
  }

  ngOnInit(): void {

    if(!this.id){ // id value is undefined
      console.log(">>>> 1"); // add product data
    }else{
       // edit product form
       this.productService.getProductById(this.id).subscribe(product => {
        this.product = product;
        console.log(product);

        this.productForm.patchValue({
          name: this.product.name,
          description: this.product.description,
          price: this.product.price,
        });

        this.btnLabel='Update'

       });
    }

    this.productForm = this.fb.group(
      {
        name: ['', [Validators.required,Validators.minLength(3)]],
        price: ['', [Validators.required,Validators.pattern('^[0-9]+(\\.[0-9]{2}?$)')]],
        description: ['', [Validators.required]]
      })
  }

  get fc(){
    // console.log(this.productForm.controls);
     return this.productForm.controls;
   }

 handleSubmit(){

    if(this.id){
      this.productService.updateProduct(this.id,this.productForm.value).subscribe(
        product => {
          this.product = product;
          console.log(this.product);
          return false;
    });
    
    
  }

   this.isSubmited = true;
   if(this.productForm.valid){
    this.productService.createProduct(this.productForm.value).subscribe(resp=>{
      console.log(resp);
      this.isSubmited = false;
      this.router.navigate(['/products']);
    });
   }


   }
 }

