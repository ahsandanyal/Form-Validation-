let userN =document.getElementById("username");
let userP = document.getElementById("password");
let flag = 1;

let cls = document.getElementById("userError");
// cls.style.backgroundColor = "blue";
cls.style.textAlign= "left";


 function validateForm(){
     
    if(userN.value == ""){
       document.getElementById("userError").innerHTML = "User name is empty";
       flag = 0;
    }
    else if(userN.value.length < 3){
        document.getElementById("userError").innerHTML = "User name required 3 character";
        flag = 0;
    }
    else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if(userP.value == ""){
        document.getElementById("passError").innerHTML = "Password is empty";
        flag = 0;
    }
    else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
    if(flag){
        return true;
    }else{
        return false;
    }
 }