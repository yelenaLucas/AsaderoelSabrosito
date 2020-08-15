function ValidarLogin(){
    var usuario, contraseña;
    var reg =  /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;

    if(usuario.length === 0){
        alert("El campo usuario es obligatorio");
        return false;
    }else if(contraseña.length === 0){
        alert("El campo contraseña es obligatorio");
        return false;
    
    }else if(reg.test(usuario) == false){
        alert('Correo no valido');
        return false;
    }else{
        alert("Bienvenido al Sabrosito");
        return false; 
    }
};
