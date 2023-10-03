function CheckInput()
{

    var firstName = document.getElementById("fname").value;
    //alert(firstName)
    
    var LastName = document.getElementById("lname").value;
    //alert(LastName)

    var allName = firstName+ LastName;

    var len = allName.length;
    //alert(len)

    var Zipcode= document.getElementById("zipcodeNum").value;
    //alert(zipcode)

    if (len>20)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Name Length";
    }
    
    else if((Zipcode>9999) && (Zipcode<1000000))
    {
        document.getElementById("loginStatus").innerHTML = "VALID!";
        location.replace("strings.html");
    }

    else{
        document.getElementById("loginStatus").innerHTML = "Invalid";
    }
    

}
