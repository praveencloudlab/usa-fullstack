function myfun(){
    console.log("myfun(): getting evaluated");
    return function(target:any,propertyKey:string,description:PropertyDescriptor){
        console.log("myfun() is called"); 
    };
}

class Test{
   
    //@myfun()
    method(){
        console.log(">>>> Hello method");
    }
}

