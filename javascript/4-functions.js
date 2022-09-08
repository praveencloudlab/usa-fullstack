
// imp notw: function is an object in java script

/**
 *  how to create/define function? : 2 ways
 * ----------------------------------------------
 * way-1 : function declaration / named function
 *          => this function will get create at scope creation phase
 *          => always hoist with function object
 * way-2 : function expression / Anonymous function
 *          => this function will get create at scope execution-phase
 */

/*
 f1(); // valid
  function f1(){ // named function
    console.log(">>> f1 function - v1");
  }
f1() // valid

*/


//sayName(); // error
/*
var sayName=function(){ // function expression
    console.log(">> sayname function");
}
//sayName();  /// valid
*/

// function parameters

/*
function f1(a,b){
   // console.log(">>> f1 function");
   console.log(arguments[0]);
   console.log(arguments[1]);
   console.log(arguments[2]);

}

f1(100,34,87);// no parameters
f1();
*/

/*
function sum(){
    let len=arguments.length;
    result=0;
    i=0;
    while(i<len){
        result+=arguments[i];
        i++;
    }
    return result;
}
console.log(sum(10,20,43,12,65));

//sum(10,20,76,32);
*/

// can we do method overloding in JS ? No
//--------------------------------------------

/*
function getLunch(){
    return "No Lunch"
}

function getLunch(pay){
    return "Pizza"
}

function getLunch(pay,extra){
    return "Pizza "+" extra cheese"
}

//console.log(getLunch());
*/


/*
function getLunch(){
    if(arguments.length===0){
        return "No Lunch"
    }
    if(arguments.length===1){
        return "Pizza"
    }
    if(arguments.length===2){
        return "Pizza "+" extra cheese"
    }
}
console.log(getLunch(65,98));
*/

// function with default & rest parameters (es6 feature)
//-------------------------------------------------------------

/*
 function f2(a=1,b=3,...c){ // rest parameter must be the last argument
    console.log(a);
    console.log(b);
    console.log(c);
 }

 f2(100,76,87,23,3,5,32);
 */

  
 // FP principles
 //---------------------
 //1. A function can be stored in a variable or value
 function greet(){
    console.log("Hello");
 }

 let sayHello=greet;
 //sayHello();

 // 2. A parameter of a function can be a function

 function f(){
    console.log("f function");
 }
 /*

 function greet(f){
    console.log("---------------------");

    if(f)
        f();
    else
    console.log("Welcome");
    console.log("---------------------");

 }
 greet(f);
 */

 /*

  let numbers=[1,3,5,7,9,2,4,6,8,10] // sort the array
   // console.log(numbers);

   const asc=function(x,y){
    return x-y;
   }
   numbers.sort(asc);
   console.log(numbers);

   */



   // 3. The return value of a function can be a function
   //---------------------------------------------------------

   /*
   function teach(){ // parent
    console.log("teaching java script");
    //...

    let learn=function(){ // child
        console.log("learning java script");
    }
    //learn();
    console.log("teaching ends");
    return learn;
   }

   //teach();
   //teach();

   let learnFun=teach();
   learnFun();
   learnFun();
   learnFun();
   */


   // return more than one function 

   function validateForm(){
    console.log("validating form");

    let validateFname=function(){
        console.log("validating first name");
    }
    let validateAge=function(){
        console.log("validating age");
    }
    let validateEmail=function(){
        console.log("validating email");
    }

    //return validateAge; // returning a function
    
    return { // returning an object
        validateFname,validateAge,validateEmail
    }
   }

   //let validateAge=validateForm();
  // validateAge();

  let validateObj=validateForm();
  validateObj.validateFname();
  validateObj.validateEmail();
  validateObj.validateAge();







