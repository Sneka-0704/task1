//function without argument without return type
function fun(){
    console.log("Function sample example")
}
fun()

//function with argument without return type
function fun(a,b){
    console.log("function with argument without return type")
    for(i=a;i<b;i++){
        if (i%2==0){
            console.log("the number"+i+" is even")
    }
         else{
            console.log("the number"+i+"is odd")
         }
}
}
fun(5,10)
//function with argument and with return type
