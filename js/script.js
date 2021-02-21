function calc(){
    var cc= parseInt(document.querySelector("#cc").value);
    var yy= parseInt(document.querySelector("#yy").value);
    var mm= parseInt(document.querySelector("#mm").value);
    var dd= parseInt(document.querySelector("#dd").value);
    var gender=document.querySelector("#gender").value;
    var day= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
    var dayFixed= day.toFixed();
    var calculate;
    if(gender == "male" && dayFixed == 5){
        console.log("Tuesday")
  }
    else if(gender == "male" && dayFixed == 5){
        console.log("Tuesday")
  }
    else if(gender == "male" && dayFixed == 5){
          console.log("Tuesday")
    }
    
}