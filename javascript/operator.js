//assignment operator
var a=10
console.log("assignment operator ouput:",a)
//arithmetic operator:+,-,*,/,%,++,--
var aA=10
var bA=10
console.log("arithmetic opeartion:",aA+bA)
console.log("arithmetic opeartion:",aA-bA)
console.log("arithmetic opeartion:",aA*bA)
console.log("arithmetic opeartion:",aA/bA)
console.log("arithmetic opeartion:",aA%bA)
//logical operator:&&,||,!
var aA=10
var bA=10
console.log("arithmetic opeartion:",0&&20)
console.log("arithmetic opeartion:",10&&0)
console.log("arithmetic opeartion:",aA||20)
console.log("arithmetic opeartion:",!aA)


console.log(10||20)
console.log(10||20)
console.log(10||0)
console.log(100||20&&0)
console.log(0||20)


//Relational operator -> <,>,<=,>=,===,!==
aR=10
bR=20
console.log("Relational operator > is:",aR>bR)
console.log("Relational operator >= is:",aR>=bR)
console.log("Relational operator < is:",aR<bR)
console.log("Relational operator <= is:",aR<=bR)
console.log("Relational operator === is:",aR===bR)
console.log("Relational operator !== is:",aR!==bR)

//objects
//how will u  declare objects.
//1st way
var customerDetails={
    "Name":"Raja",        // comma is main otherwise it will show winkle
    "Age":25,
    "Phone":"8778431391"   //comma is optional for last key pair value 

}
console.log(customerDetails)
//adding details which is not in customerdetails
customerDetails["id"]="21ECR198"
console.log(customerDetails)
//why key does not hold any quotes in your object----->key will not hold any quote because it is inbuiltly present
//2nd way 
var customerDetails={}
customerDetails["id"]="21ECR198"
customerDetails["name"]="sneka"
customerDetails["age"]="25"
customerDetails["phone"]="6369171182"
console.log(customerDetails)