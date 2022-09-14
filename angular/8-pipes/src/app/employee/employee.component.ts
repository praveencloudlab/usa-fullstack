import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

   filterText='';
  
   emps=[
    {id:10,name: 'John',email: 'Johnson @gmail.com',salary:15000},
    {id:11,name: 'Doe',email: 'Doe@gmail. com',salary:84384},
    {id:12,name: 'Linden',email: 'Linden@ gmail. com',salary:937493  },
    {id:13,name: 'Larry',email: 'Larry@ google.com',salary:3453},
    {id:14,name: 'Laura',email: 'Laura@ google.com',salary:3645364},
    {id:15,name: 'Michael',email: 'Micha@gmail.com',salary:547386},
    {id:16,name: 'Lillian',email: 'Lillian@ google.com',salary:9279},
    {id:17,name: 'Lori',email: 'Lori@ google.com',salary:574774},
    {id:18,name: 'Michael',email: 'Micha@gmail.com',salary:4866846},
    {id:19,name: 'Lillian',email: 'Lillian@ google.com',salary:13773}
    
   ]

   

}
