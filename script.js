function checkPassword(){

    const password =
    document.getElementById("password").value;

    if(password === "adilovessuku"){

        document.getElementById("login-screen")
        .style.display = "none";

        document.getElementById("main-content")
        .style.display = "block";

    }else{
        alert("Wrong Password ❤");
    }
}
