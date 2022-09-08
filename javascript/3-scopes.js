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

var v=12;
function f1(){ // f1 scope is child of scopes.js
    console.log(v); // undefined..
    var v=13;
}

f1();


