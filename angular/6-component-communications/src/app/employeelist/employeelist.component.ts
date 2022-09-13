import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {


  buttonLabels=[10,20,30,40,50,-65,54,90];

emps=[
  {id:10,name: 'John',salary:88688},
  {id:11,name: 'Doe',salary:3433},
  {id:12,name: 'Jane',salary:5336},
  {id:13,name: 'Leia',salary:3433},
  {id:14,name: 'Joshua',salary:5336},  
]
  

}
