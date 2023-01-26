let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.onclick = function() {
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "icons8-trancar-48.png";
    } else{
        password.type = "password";
        eyeicon.src = "icons8-bloqueio-privado-30.png";
    }
}

