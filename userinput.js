function CheckInput()
{

    var firstName = document.getElementById("fname").value;
    //alert(firstName)
    
    var LastName = document.getElementById("lname").value;
    //alert(LastName)

    var allName = firstName +  " " + LastName;

    var len = allName.length;
    //alert(len)

    var Zipcode= document.getElementById("zipcodeNum").value;
    //alert(zipcode)

    if (len>20)
    {
        document.getElementById("loginStatus").innerHTML = "Valid Login";
    }
    //length of input has more than 20 characters//
    
    else if((Zipcode>0) && (len <6))
    {
document.getElementById("loginStatus").innerHTML = "Invalid Logiin!";
  }

else{
    document.getElementById("loginStatus").innerHTML = "Valid Logiin!";
}

}