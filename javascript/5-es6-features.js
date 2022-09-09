/**
 * ES6 new features
 * -> spread operator
 * -> de-structuring
 * -> iterable-objects
 * -> generator functions
 * -> promise api
 * -> async-await
 * -> reactive programmig 
 */

function display(n1,n2,n3,n4,n5){

    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
    console.log(n5);
}
/*
let x=10;
let y=20;
let z=30;

display(x,y,z)
*/

//let numbers=[10,20,30,40,50];
//display(numbers);
//display(numbers[0],numbers[1],numbers[2],numbers[3])

// spread operator
//display(...numbers)

// Ex1
//let arr1=[1,2,3]
//let arr2=[7,8,9]
//let arr3=[...arr1,4,5,6,...arr2]

//console.log(arr3);

// Ex2
//let arr=[40,30,20,70,10]
//let maxValue=Math.max(...arr);
//console.log(maxValue);

/*
let o1={
    x:10,
    y:20
}
let o2={
    z:30,
    x:1
}
//let o3={...o2,...o1}
// or
//let o4=Object.assign({},o2,o1)
//console.log(o4);
*/

//de-structuring
//-----------------------

  //-----------------------------
  // a. object de-structuring
  //-----------------------------

  let person={
    name:'Praveen',
    age:38,
    address:'India'
  }
//let myName=person.name;
//let myAge=person.age
//let myAddress=person.address

// or 
let {name:myName,age:myAge,address:myAddress}=person;
//let {name:name,age:age,address:address}=person;
// or

//let{name,age,address}=person;
let{age,name}=person;


  //-----------------------------
  // b. array de-structuring
  //-----------------------------

  let numbers=[10,20,30,40,50,60,70,80,[90,20]];
  //let n1=numbers[0];
  //let n2=numbers[1];

  // or
  //debugger
  //let[n1,n2,n3,n4,n5=1000,n6,,n8,[n9,n10]]=numbers;

  //---------------------------------
  //        iterable-objects
  //---------------------------------

  /*
  let menu=[
    "Chicken",
    "Pizza",
    "Apple",
    "Mango"
  ]
  */
/*
  let it=menu[Symbol.iterator]()
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  */

  // - or -
  // for of for (imp note: it can be used only to arrays)
  /*
  for(let item of menu){ // of means values
        console.log(item);
  }
  console.log("------------------------");
  for(let item in menu){ // in means index
    console.log(item);
}
*/


let menu=[
    "Chicken",
    "Pizza",
    "Apple",
    "Mango"
  ]

  //menu.forEach(item=>console.log(item));

  //menu.forEach((item,idx)=>{
   // console.log(idx+" => "+item);
  //})

  // find Pizza from menu object
  /*
  let result=menu.find(item=>item==="Pizza")
  if(result)
  console.log(result)
  else
  console.log("Item not found");

  */


  let employees=[
    {id:10,name:'Praveen',salary:50000},
    {id:11,name:'James',salary:75000},
    {id:12,name:'Krish',salary:20000},
    {id:13,name:'David',salary:12000},
    {id:14,name:'Sarah',salary:19765}
  ]

   //employees.forEach(emp=>console.log(emp))
   /*
   employees.forEach(emp=>{
    console.log(emp.id);
    console.log(emp.name);
   })
   */

   // display employees only whose salary is above 22000

     //let results=employees.filter(emp=>emp.salary>=20000);
     //console.log(results);

     let result=employees.filter(emp=>emp.salary>=20000)
     //.find(emp=>emp.id===11)
     //.map(emp=>emp.id===11)
     //.forEach(emp=>console.log(emp))

     //console.log(result);







