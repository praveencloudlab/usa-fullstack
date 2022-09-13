import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular components...';
  name='Praveen';

  imagePath="assets/images/tj.png";

   myText="Sample Text in input box";

  isVisible=false;
  firstName='';
  isSubmited=true;

   myStyle="s1 s2"

   dynamicStyle=""


   numbers=[10,20,30,40,50]
   employees=[
    {id:10,name:'Abc',salary:87734},
    {id:11,name:'Xyz',salary:46344},
    {id:12,name:'Aaa',salary:97497},
    {id:13,name:'Bbb',salary:34344},
    {id:14,name:'Ccc',salary:88646},
   ]

  age=15;

    f7(data:any){
      this.dynamicStyle=data.value
    }

    f6(data:any){
      // ......
    }

    f5(data:any){
      //console.log(data.value);
      this.firstName=data.value;
      
     // console.log(data);
      
    }

   f4(){
    this.isVisible=!this.isVisible;
   }

   f1(){
      this.isVisible=false;
   }

   f2(){
    this.isVisible=true;
   }

   f3(){
    this.isVisible=!this.isVisible;
   }







}
