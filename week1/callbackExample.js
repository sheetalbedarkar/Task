function myFunction(val, callback){
    if(val == 1){
        callback(true);
    }else{
        callback(false);
    }
}

myFunction(3, 
function (bool){
    if(bool){
        console.log("do stuff for when value is true");
    }else {        console.log("do stuff for when value is false");
    }
});