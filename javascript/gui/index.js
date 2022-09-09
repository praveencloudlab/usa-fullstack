// inner html oprations...

let d1Obj=document.getElementById("d1");
let d2Obj=document.querySelector("#d2")
let d3Obj=document.querySelector("#d3")
let b1Obj=document.querySelector("#b1");
let fnObj=document.querySelector("#fn");

console.log(d1Obj);

let name='Praveen';
d1Obj.innerHTML=name;

let validateFirstName=function(fn){
    if(fn=="" || fn==" "){
     d3Obj.innerHTML="First name should be provided.."
     return false
    }
    return true 
}


fnObj.addEventListener('blur',(e)=>{
    let {value}=e.target;
    if(validateFirstName(value)){
        d3Obj.innerHTML=value
    }
    //console.log(value);
    let template=`
        <h1> ${value}</h1>
        <p>Para1</p>
        <button>click me </button>
    `
    //d3Obj.innerHTML=template
})



b1Obj.addEventListener('click',()=>{
    d2Obj.innerHTML='New daa added by js....'
    //data();
 
})



let data=function(){
    


}
