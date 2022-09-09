"use strict"
/**
 *  function binding
 * //--------------------
 *  => to execute any function by an object, we must do binding
 * 
 *   types
 * -----------
 * => static
 * => dynamic
 * 
 */


//----------------------------
// static function  binding
//----------------------------

function isEven(inp){
    console.log(this); // window object (window is parent object to all other js objects)
    let out=inp%2===0
    return out;
}
//let out=isEven(10);
//console.log(out);

/*

 function sayName(){
    console.log(`i am ${this.name}`);
 }

 //sayName(); // leds to a reference error
 let p1={
    name:'Praveen',
    sayName:sayName // static binding
 }
 let p2={
    name:'James',
    sayName:function(){
        console.log("my name is "+this.name);
    }
 }
 p1.sayName();
 p2.sayName()

 */

  //----------------------
  // academy-module
  //----------------------

  /*
  function doTraning(sub,duration,location){
    console.log(`trainer, ${this.name} is teaching ${sub} for ${duration} hours in ${location}`);
  }
  */

  //doTraning("Java Scipt",60,'USA')  // reference error

  //way-1
  //let trainer={name:'Praveen',doTraning:doTraning}
  //trainer.doTraning('Java Scipt',60,'USA');
  //trainer.doTraning('Java',100,'India')

  // way-2
  //let trainer={name:'Praveen'}
  //trainer.doTraning=doTraning;
  //trainer.doTraning("MEAN STACK",200,'USA')

 // Vendore-module
 //-----------------------
 //et trainer={name:'Praveen'}
 //Object.preventExtensions(trainer);

 // academy module
 //---------------------
 //trainer.doTraning=doTraning; // rerence error


 function doTraning(sub,duration,location){
    console.log(`trainer, ${this.name} is teaching ${sub} for ${duration} hours in ${location}`);
  }
  let trainer={name:'Praveen'}
  let trainer1={name:'Bucky'}
  let trainer2={name:'James'}
  Object.preventExtensions(trainer);
 // Dynamic function binding
 //-------------------------------
 // Eager invocation
 /**
  *  way-1: call => eager invocation
  *  way-2: appy => eager invocation
  *  way-3: bind => lazy invocation
  * */ 

 // way-1: call => eager invocation
 //doTraning.call(trainer,"Java Script",60,"US")
 // way-2
 //doTraning.apply(trainer,["Spring",120,'UK'])
//way-3
// note: bind returns a function
 let loc1=doTraning.bind(trainer,'Java Script');
 let loc2=doTraning.bind(trainer1,'Java Script');
 let loc3=doTraning.bind(trainer2,'JPA');
 //loc1("120","USA")
 //loc2(50,"India")
 //loc3(140,"UK")
  
  //--------------------------------------------
  // static vs dynamic function binding
  //--------------------------------------------

  /**
   *  ==> to keep the function on object for-ever ==> sttaic
   *  ==> just function by object ==> dynamic
   * 
   * 
   */

 









 










