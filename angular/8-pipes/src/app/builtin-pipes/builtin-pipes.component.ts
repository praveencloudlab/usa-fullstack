import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.css']
})
export class BuiltinPipesComponent {

  
  date=new Date();

  emp={id:10,name:'James',email:'james@abc.com'}

  name='Praveen'

}
