/*
//hoisting
//variable hoisting
console.log(a) //reference error :a is not defined
var a=10 //undefined


var b
console.log(b)//output-->undefined(bcoz of the value is not defined)


console.log(c)
let c=10//ReferenceError: Cannot access 'c' before initialization
*/
//functional hoisting
konguclg(5,10)                   //arguments
function konguclg(a,b){         //parameter
    for(i=a;i<b;i++){
        if (i%2==0){
            console.log("the number"+i+" is even")
    }
         else{
            console.log("the number"+i+"is odd")
         }
}

}
