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
    if(mm>=13 || 0>mm){
        alert("Invalid month. month can only be between 1 to 12");
    }
    else if(cc>=21 || cc<17){
        alert("Invalid century. century can only be between 18 to 20");
    }
    else if(dd>=32 || dd<=0){
        alert("Please enter a valid date, this can only be between 1 to 31");
    }
    else if(yy>=100){
        alert("Invalid year please enter a year between 00 to 99")
    }
   else if(gender == "male" && dayFixed == 0){
        document.querySelector("#result").innerHTML="Your Akan name is Kwame";
  }
    else if(gender == "male" && dayFixed == 1){
        document.querySelector("#result").innerHTML="Your Akan name is Kwasi";
  }
  else if(gender == "male" && dayFixed == 2){
    document.querySelector("#result").innerHTML="Your Akan name is Kwadwo";
}
else if(gender == "male" && dayFixed == 3){
    document.querySelector("#result").innerHTML="Your Akan name is Kwabena";
}
else if(gender == "male" && dayFixed == 4){
    document.querySelector("#result").innerHTML="Your Akan name is Kwaku";
}
else if(gender == "male" && dayFixed == 5){
    document.querySelector("#result").innerHTML="Your Akan name is Yaw";
}
else if(gender == "male" && dayFixed == 6){
    document.querySelector("#result").innerHTML="Your Akan name is Kofi";
    }

else if(gender == "female" && dayFixed == 0){
    document.querySelector("#result").innerHTML="Your Akan name is Ama";
}
else if(gender == "female" && dayFixed == 1){
    document.querySelector("#result").innerHTML="Your Akan name is Akosua";
}
else if(gender == "female" && dayFixed == 2){
document.querySelector("#result").innerHTML="Your Akan name is Adwoa";
}
else if(gender == "female" && dayFixed == 3){
document.querySelector("#result").innerHTML="Your Akan name is Abenaa";
}
else if(gender == "female" && dayFixed == 4){
document.querySelector("#result").innerHTML="Your Akan name is Akua";
}
else if(gender == "female" && dayFixed == 5){
document.querySelector("#result").innerHTML="Your Akan name is Yaa";
}
else if(gender == "female" && dayFixed == 6){
document.querySelector("#result").innerHTML="Your Akan name is Afua";
}

}