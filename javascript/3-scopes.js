"use strict"

// scope / execution context
//----------------------------------------

/**
 *  memory/stack-frame which contains arguments & localvariables,
 *  to execute piece of instructions
 * 
 *  2 phases
 * -------------
 * phase 1: creation / push
 *  ==> all the variable declared with 'var' keyword,
 *      will get hoisted up to of the scope with defaut value (undefined)
 * 
 * 
 */


//console.log("-first-line-");
//console.log(v);


/*
var v=12;
function f1(){ // f1 scope is child of scopes.js
    console.log(v); // undefined..
    var v=13;
}

f1();
*/

/*
var v=12;
function f1(){ // f1 is scopes.js child scope
    function f2(){ // f2 is child of f1
        console.log(v); // undefined from f1 scope
    }
    f2();
    var v=13;
} // f1 closes here
f1();
*/

//var v=12;
//var v=13;
//console.log(v);

/*
var v=12;
if(true){
    var v=13
} // if ends here 
console.log(v);
*/


//------------------------------------------------
// problems / limitations with 'var' keyword
//------------------------------------------------

/**
 * -> variable always get hoist
 * -> can re-declare same variable with in the scope
 * -> no block-scope
 * 
 * solution
 * -------------
 * => using 'let' & 'const' keyword with block scope
 *  note: let is ES6 feature
 * 
 */

  //console.log(v);
  //let v=12; // ref error

  //let v=12;
  //let v=13;

  /*
  let v=12;
  if(true){
    let v=13 // block scope
    console.log("in if: "+v); // 13
  }
  console.log("after if "+v); // 12
  */

  //const person={
    //name:'Praveen'
  //}

  //person=null; // error 
  //person.name='Bucky Wall'



  //--------------
  // summary
  //--------------

  /**
   *  #1 : use 'let' keyword for mutable references
   *  #2 : use 'const' keyword for immutable references
   *  #3 : avoid 'var' keyword for better /error free code.
   * 
   */
