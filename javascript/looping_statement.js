/*for(i=0;i<=n;i++){

}

var i=0
while(condition)
{
    statements
    Increment/decodeURIComponent(without thie it is a bug)
}
do{

}while(condition);*/
//looping
//for loop
sum=0
for(var i=0;i<10;i++){
    sum+=i
}
console.log(sum)
sum=0
i=0
while(i<10){
    sum+=i;
    i++
}
console.log(sum)


//do ...while
sum=0
j=0
do{
    sum+=j
    j++

}while(j<10);
console.log(sum)

// arr=[10,20,30]----> Valid
// arr=[10,20,20.5]---->
// arr=[10,20,]
// to find the length of the array arr.length

//example1
arr=[10,20,30]//valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//example2
arr=[10,20,20.5]//valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//example3
arr=[10,20,true,false]//valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//example4
arr=[10,"string","kongu",20,true]//valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//javascript can hold all the datatypes including fuctions

//for in loop
arr=[10,"string","kongu",20,true]
for (const index in arr){
    console.log("The value present in",index,"is",arr[index])
}

//for of loop
arr=[10,"string","kongu",20,true]
for (const value of arr){
    console.log(value)
}

//for each loop
//example1
arr=[10,"string","kongu",20,true]
arr.forEach(value => {
    console.log(value)
    
});

//example2
var kongu=new Object()  ///creating object
kongu["fees"]=100000
kongu["accomodation"]="Excellent"
kongu["food"]="pretty decent"
kongu["hostel count"] = 10
console.log(kongu)


//for in eg==>output==key
for (key in kongu){
    console.log(key,kongu[key])

}
