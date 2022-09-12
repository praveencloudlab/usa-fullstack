class Employee{
    empId:number;
    empName:string
    salary:number
    // constructor
    constructor(_empId:number,_empName:string){
        this.empId=_empId; // _ means private property
        this.empName=_empName;
    }

    display(){
        console.log("EmpID: "+this.empId+" and name is "+this.empName);
    }

}

let e1=new Employee(10,'Praveen');
e1.display();
