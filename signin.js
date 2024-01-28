let getUsersdata = JSON.parse(localStorage.getItem("userData")) || [];

function Signin(){

    let mobile = document.getElementById("mobile").value;

    let password = document.getElementById("pass").value;

    let count = 0;

    if(mobile.length !== 10){
        alert("Mobile number Should be of 10 digits");
    }else if(mobile.length == 0){
        alert("Enter Mobile Number")
    };

    for(let i = 0; i < getUsersdata.length; i++){
        
        if(mobile == getUsersdata[i].mobile){
            if(password == getUsersdata[i].password){
                console.log("Sign in Successful");
            }
            else{
                console.log("Invalid password")
            }
        }
        else{
            count++;
        }
    }
    if(count == getUsersdata.length){
        alert("Users is Not registered, Signup up to Continue")
    }
}
