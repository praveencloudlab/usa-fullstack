function display<T>(data:T):T{
    return data;
}

/*
console.log(display("Helo How are you?"));
console.log(display(23));
console.log(display(false));
console.log(display(null));
console.log(display(undefined));
console.log(display(87.34));
*/

let nums=display<number>(877);
let s1=display<string>('Praveen');








