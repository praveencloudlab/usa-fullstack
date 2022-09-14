import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  @Input()
   name="";

   @Input("address")
   addr=""

   @Input("employees")
   emps=[{id:0,name:'',salary:0}]
 
  



}
