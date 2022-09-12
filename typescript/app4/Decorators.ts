function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called");
    };
  }

  class Example{

    @first()
    method(){
        console.log(">>> method");
        
    }

    @first()
    method2(){}

  }

  let e=new Example();
  e.method();