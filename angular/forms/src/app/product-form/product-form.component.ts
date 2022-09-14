import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm?:FormGroup;
   isSubmited=false;

  constructor(private fb: FormBuilder,private http:HttpClient) { }
  handleSubmit(){
    this.isSubmited = true;
    if(this.productForm.valid){
      this.http.post('http://localhost:8080/api/products', this.productForm.value).subscribe(resp=>{
          console.log(resp);
      })
    }
   //this.fc;
    //console.log(this.productForm.get('name').value);
    console.log(this.productForm.value);
  }

  get fc(){
   // console.log(this.productForm.controls);
    return this.productForm.controls;
  }
  ngOnInit(): void {

    
    this.productForm = this.fb.group(
      {
        name: ['', [Validators.required,Validators.minLength(3)]],
        price: ['', [Validators.required,Validators.pattern('^[0-9]+(\\.[0-9]{2}?$)')]],
        description: ['', [Validators.required]]
      })
  }

}
