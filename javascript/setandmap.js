//setExample=new Set()//collection of unique data/value
//syntax:
   // variablename=new Set()
   //how to add elements into the set?
   //variable Name.add(value)
   //console.log(variable)
//MAP---->it is a key value pair
   //variableName = new Map();
   //variable Name.add("id","21ecr198");


   setExample=new Set("aiadmk","bjp","congress")
   console.log(setExample)

   setExample=new Set(["aiadmk","bjp","congress"])
   console.log(setExample)
   setExample.add("dmk")
   setExample.add("aiadmk")
   console.log(setExample)

   for (element of setExample){
    console.log(element)
   }//set in (for of) produce value


   
   for (key in setExample)
   {
    console.log(key,setExample[key])
   
   }//set in (for in) produce empty




   //MAP
   mapEg=new Map([
    ["id","21ecr198"],["name","sneka"]])
    console.log(mapEg)
    mapEg.set("age","20")
    mapEg.set("phone","6369171182")
    console.log(mapEg)
    mapEg.delete("phone","6369171182")//delete
    console.log(mapEg)
    mapEg=new Map([
        ["id","21ecr198"],["name","sneka"]])
        console.log(mapEg)
//for in 

    for(element in mapEg){
        console.log(element,mapEg[element])
    }
//for of
    for (element of mapEg){
        console.log(element)
       }//set in (for of) produce value


console.log(mapEg.has("name"))
    

