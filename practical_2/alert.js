//alert("WELCOME TO STUDENT REGISTRATION");
function form(event){
    if (event) event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email= document.getElementById("email").value.trim();
    let phone= document.getElementById("phone").value.trim();
    let password =document.getElementById("password").value.trim();    

    if(name==""){
        alert("Enter your Name");
        return false;
    }
    if(email==""){                                  
        alert("Enter your Name");
        return false;
    }
    if(phone==""){
        alert("Enter your Name");
        return false;
    }
    if(password==""){
        alert("Enter your Name");
        return false;
    }
    if(phone.length()!=10){
        alert("enter correct phone no.");
    }
    
    



    alert("Form successfully submitted");
    return true;
}