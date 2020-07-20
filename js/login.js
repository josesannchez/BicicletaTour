
var usuarioLogin = document.getElementById("txtLoginUser");
var contraseñaLogin = document.getElementById("txtContraUser");
var btnLogin = document.getElementById("form");

btnLogin.addEventListener ('submit', function(event){
    event.preventDefault();
    if (usuarioLogin.value ==='Jose1996san@gmail.com' && contraseñaLogin.value === 'Qmasv88'){
        alert("Inicio de sesion exitoso");
        window.location.href="index.html";
     }
     else
     {
       alert("Los datos son incorrectos");
       return false;
     }
    
    });
   