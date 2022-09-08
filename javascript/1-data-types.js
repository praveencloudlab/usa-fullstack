"use strict"  // strong error checking
/**
 *  basic data types
 * -------------------------
 *  1. simple/primitives ==> values
 *      a. undefined
 *      b. string
 *      c. number
 *      d. boolean
 *      e. bigint
 *  
 *  2. complex/reference ==> objects    
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

    //-----------------------------
    //1. simple/primitives
    //-----------------------------

    // a. undefined
    //---------------

    //console.log("-- data types --");



    // string
    var name="Praveen";
    var sub="Java Script"
    var s1='This is string type'
    var dynamicString1="The trainer "+name+" is teaching "+sub+" at some location"
    var dynamicString2=`The Trainer ${name} is teaching ${sub} at some loc`
    var template=`
    <div>
        <h1>name ${name}</h1>
        <h1>subject ${sub} </h1>
    </div>
    
    `
//document.querySelector("#d1").innerHTML=template;

  var resultString=`the sum of ${100} and ${200} is ${100+200}`


 // number
   var count=12
   var cost=12.87

   // bigint
   var max_value=8343844846386483684568456846548568465845684568465375473453n

// boolean
 var isFinished=true;
 /**
  * imp-note
  * 
  * falsy value: false,"",0,undefined, null, NaN
  *  var s2;
    if(s2){
        console.log(true);
    }else{
        console.log(false);
    }

      if(false==0){
    console.log(true);
  }else{
    console.log(false);
  }

  * 
  */
  

  var n1=10;
  var n2="10";
  /*
  if(n1==n2){ // only compare values of both variable. not types....
    console.log(true);
  }else{
    console.log(false);
  }
  */

  /*
  if(n1===n2){ // only compare types of both variable. not values....
    console.log(true);
  }else{
    console.log(false);
  }
  */

  //---------------------------------------
  // complex/reference types / objects
  //---------------------------------------

  /** 
   *  what is  object?
   * 
   *    => data/info/attr/properties  ==> state
   *    => func/methods/work/oprn     ==> behavior
   *    => addr/location/reference    ==> identity
   * 
   *    obj ==> S B I
   * 
   *    e.g
   *         trainer-obj
   *            -> state (name,age,skill)
   *            -> behav (teach)
   *            -> identity (where am i)
   * 
   *   class ===> description/blueprint/template of similar objects
   *   class ===> instance(s)
   */

     // class / constructor (till ES5)
     //-----------------------------------

     function Person(name,age){
        this.name=name
        this.age=age
     }

     Person.prototype.sayName=function(){
        console.log(`i am ${this.name}`);
     }

     Person.prototype.sayAge=function(){
        console.log(`iam ${this.age} years old`);
     }
      
     /**
      * how to craete obejct from class
      *   2 steps
      * --------------
      *  step-1: dynamic memory allocation : ==> 'new' keyword
      *  step-2: inilize obj's propertes   : ==> constructor
      *  syntax:
      *  var ref=new Constructor()
      */

      var p1=new Person('Praveen',65);
      var p2=new Person('James',45);
      var p3=new Person('Rose',98);
      var p4=new Person('David',34);

      // class / constructor (from ES6 - 2015 spec)
      //-----------------------------------------------

      class NewPerson{
        constructor(name,age){
            this.name=name
            this.age=age
        }
        sayName(){
            console.log(`I am ${this.name}`);
        }
        sayAge(){
            console.log(`I am ${this.age} years old`);
        }
      }

      var p6=new NewPerson('Prashi',65);


      /**
       * imp-note
       * ------------
       * by default all java script objects are extensible
       * i.e we can add new perperties on the fly if required
       * 
       */

       var emp={
        id:10,
        name:'Praveen'
       }

       //console.log(Object.isExtensible(emp));
       //Object.preventExtensions(emp);
       //console.log(Object.isExtensible(emp));
       //emp.age=87;

        /**
       * imp-note
       * ------------
       * by default, all java script obejcts are configurable,
       * i.e we can declare existing properties of the fly
       * 
       */

        /** 
        var animal={
            id:10,
            name:'Bird',
            type:'A1'
        }
        */

        //Object.preventExtensions(animal);
        //console.log(Object.isSealed(animal));
        //animal.skill='Fly';
        //delete animal.type;

        //Object.seal(animal); // preventExtension + prevent deletion
        //animal.skill='Fly';
        //delete animal.type;


      /**
       * imp-note
       * ------------
       *  by default all java script object properties are mutable (content of object can be modified)
       * 
       * 
       */

       var animal={
        id:10,
        name:'Bird',
        type:'A1'
       }

      // animal.name='Human';

      console.log(Object.isFrozen(animal));

      Object.freeze(animal)//preventExtension + prevent deletion + prevent mutability
     
      //animal.name='Human';
      //animal.skill='Fly';
      //delete animal.name;

      //-----------------------------------------
      // how to read/write obj's proerties?
      //-----------------------------------------

      /**
       *  way-1 : '.' notation
       *  way-2 : '[]' notation, if property has space or dash
       * 
       */

       var animal={
        id:10,
        'animal name':'Bird',
        'animal-type':'A1'
       }



     






    
   