//callback  
function ramuSomu(welcomeMessage,callback){    //parameters
    setTimeout(function(){
        console.log(welcomeMessage)
        callback();
    },2000)
                       
}
function miniAni(){
    console.log(" odi poiru vanthudatha da thambi!!!!!")
}

ramuSomu("hello Ramu and Somu\n Welcome to Kongu Engineering College",miniAni)//arguments




