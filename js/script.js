function calc(){
    var cc= parseInt(document.querySelector("#cc").value);
    var yy= parseInt(document.querySelector("#yy").value);
    var mm= parseInt(document.querySelector("#mm").value);
    var dd= parseInt(document.querySelector("#dd").value);
    var gender=document.querySelector("#gender").value;
    var day= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
    var dayFixed= day.toFixed();
    console.log(day)
    var calculate;
   
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

else if(gender == "female" && dayFixed == 0){
    document.querySelector("#result").innerHTML="Ama";
}
else if(gender == "female" && dayFixed == 1){
    document.querySelector("#result").innerHTML=" Akosua";
}
else if(gender == "female" && dayFixed == 2){
document.querySelector("#result").innerHTML="Adwoa";
}
else if(gender == "female" && dayFixed == 3){
document.querySelector("#result").innerHTML="Abenaa";
}
else if(gender == "female" && dayFixed == 4){
document.querySelector("#result").innerHTML="Akua";
}
else if(gender == "female" && dayFixed == 5){
document.querySelector("#result").innerHTML="Yaa";
}
else if(gender == "female" && dayFixed == 6){
document.querySelector("#result").innerHTML="Afua";
}

}