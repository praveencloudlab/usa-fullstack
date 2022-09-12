var Employee = /** @class */ (function () {
    // constructor
    function Employee(_empId, _empName) {
        this.empId = _empId; // _ means private property
        this.empName = _empName;
    }
    Employee.prototype.display = function () {
        console.log("EmpID: " + this.empId + " and name is " + this.empName);
    };
    return Employee;
}());
var e1 = new Employee(10, 'Praveen');
e1.display();
