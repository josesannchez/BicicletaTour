//Validacion de usuario.

    var NombreRegistro = document.getElementById("txtNombreusuarioRegistro");
    var ApellidoRegistro = document.getElementById("txtApellidoUsuarioregistro");
    var EdadRegistro = document.getElementById("txtEdadUsuarioRegistro");
    var NacionalidadRegistro = document.getElementById("txtNacionaliadUsuarioRegistro");
    var EmailRegistro = document.getElementById("txtEmailUsaurioRegistro");  
    var contraseñaRegistro = document.getElementById("txtContraseñaUsuarioRegistro");
    var btnRegistro = document.getElementById("formRegistro");
    btnRegistro.addEventListener ('submit', function(event){
        event.preventDefault();
        
       if (NombreRegistro.value === null || NombreRegistro.value === "")
        {
            alert("El campo Nombre  esta vacio");
            return false;
        } 
        if (ApellidoRegistro.value === null || ApellidoRegistro.value === "")
        {
            alert("El campo Apellido  esta vacio");
            return false;
        } 
        if (EdadRegistro.value === null || EdadRegistro.value === "")
        {
            alert("El campo Edad  esta vacio");
            return false;
        } 

        if (NacionalidadRegistro.value === null || NacionalidadRegistro.value === "")
        {
            alert("El campo Nacionalidad  esta vacio");
            return false;
        } 
        if (EmailRegistro.value === null || EmailRegistro.value === "")
        {
            alert("El campo Email  esta vacio");
            return false;
        } 
        if (contraseñaRegistro.value === null || contraseñaRegistro.value === "")
        {
            alert("El campo Contraseña esta  esta vacio");
            return false;
         } 
        else{
            alert("Registro Exitoso");
         location.href="index.html"
        
        } 
        }
        );
   