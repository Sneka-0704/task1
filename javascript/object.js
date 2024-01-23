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

//3rd way  
var kongu=new Object()  ///creating object
kongu["fees"]=100000
kongu["accomodation"]="Excellent"
kongu["food"]="pretty decent"
kongu["hostel count"] = 10
console.log(kongu) //when using new object() it gives line by line prefect key pair
console.log(kongu.food)  //the path of accessing inside object is dot
console.log(kongu["hostel count"])// to access the key inside the object

