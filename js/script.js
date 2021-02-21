function calc(){
    var cc= parseInt(document.querySelector("#cc").value);
    var yy= parseInt(document.querySelector("#yy").value);
    var mm= parseInt(document.querySelector("#mm").value);
    var dd= parseInt(document.querySelector("#dd").value);
    var gender=document.querySelector("#gender").value;
    var day= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
    var dayFixed= day.toFixed();
    var calculate;
    // male names
    if(gender == "male" && dayFixed == 0){
        document.querySelector("#result").innerHTML="Kwame";
  }
    else if(gender == "male" && dayFixed == 1){
        document.querySelector("#result").innerHTML="Kwasi";
  }
  else if(gender == "male" && dayFixed == 2){
    document.querySelector("#result").innerHTML="Kwadwo";
}
else if(gender == "male" && dayFixed == 3){
    document.querySelector("#result").innerHTML="Kwabena";
}
else if(gender == "male" && dayFixed == 4){
    document.querySelector("#result").innerHTML="Kwaku";
}
else if(gender == "male" && dayFixed == 5){
    document.querySelector("#result").innerHTML="Yaw";
}
else if(gender == "male" && dayFixed == 6){
    document.querySelector("#result").innerHTML="Kofi";
}

}