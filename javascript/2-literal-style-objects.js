"use strict"
// objects
//-------------
var p1=new Object();
p1.name='Praveen';
p1.age=87;

p1.sayName=function(){
    console.log('I am '+name);
}

// or - literal - style

var p2={
    name:'Bucky',
    age:36,
    sayName:function(){
        console.log('I am '+this.name);
    }
}

var req_config={
    url:'http://host/resource',
    http_method:'GET',
    onSuccess:function(response){
        // .. response code from server
    }
}

// Array
//-----------
var menu=new Array();
menu[0]="item-1";
menu[1]="item-2";
menu[2]="item-3";
//console.log(menu[2]);

// or literal style
var menu_v1=["Chicken","Rice"]

// RegExp
//-------------

//var ssn=new RegExp("\\d{4}-\\d{4}-\\d{4}");
 //ssn=1234-1234-1234;

// or literal style

 var my_pattern=/^ABC-\d{4}-\d{4}-\d{4}$/
 var id="ABC-1234-5676-1234"
 console.log(my_pattern.test(id));

 





