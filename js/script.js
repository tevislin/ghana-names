var date =function(c,y, m,d,){
    return ( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d )%7;
  }
  var c = parseInt(prompt("Enter century of birth"));
  var y = parseInt(prompt("Enter year without century of birth"));
  var m = parseInt(prompt("Enter month"));
  var d = parseInt(prompt("Enter date of birth"));
  var gender =confirm("Are you male?");
  var day = date(c,y,m,d);
  alert(day);