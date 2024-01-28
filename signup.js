let getUserData = JSON.parse(localStorage.getItem("userData")) || [];

function Signup(){
    let username = document.getElementById("naam").value;
    let mobile = document.getElementById("phone").value;
    let password = document.getElementById("pass").value;

    if(mobile.length ==0){
        alert("Enter your mobile number")
    }
    else if(mobile.length !== 10){
        alert("mobile number should have 10 digits")
    }
    else{
        let userData = {
            username:username,
            mobile:mobile,
            password:password,
        }

        let users = [...getUserData,userData];
        users.push(userData);
        localStorage.setItem("userData", JSON.stringify(users));

        alert("Signup Successful");
        window.location.href = "signin.html";
    }

    // localStorage.clear();

}

// console.log(Signup())