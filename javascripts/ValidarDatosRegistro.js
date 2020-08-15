function ValidarRegistro(){
    var nombres, apellidos, sexo, ciudadnac, fechanac,email, contra, contrac;
    nombres = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellido").value;
    sexo = document.getElementById("sexo").value;
    ciudadnac = document.getElementById("ciudad_nac").value;
    fechanac = document.getElementById("fecha_Nac").value;
    email = document.getElementById("email").value;
    contra = document.getElementById("create_password").value;
    contrac = document.getElementById("confirmar_password").value;

    if (nombres.length === 0 ){
        alert("El campo Nombres es obligatorio");
        return false;
    }else if(apellidos.length === 0){
        alert("El campo Apellidos es obligatorio");
        return false;
    }else if(sexo.length === 0){
        alert("El campo Sexo es obligatorio");
        return false;
    }else if(ciudadnac.length === 0){
        alert("El campo ciudad de nacimiento es obligatorio");
        return false;
    }else if(fechanac.length === 0){
        alert("El campo fecha de nacimiento es obligatorio");
        return false;
    }else if(email.length === 0){
        alert("El campo E-mail es obligatorio");
        return false;
    }else if(contra.length === 0){
        alert("El campo Contraseña es obligatorio");
        return false;
    }else if(contrac.length === 0){
        alert("El campo Confirmar contraseña es obligatorio");
        return false;
    }else if(fechanac.length > 0){
        var respuesta = validarfecha(fechanac);
        if(respuesta == false){
            return false;
        }
    }
    if(email.length > 0){
        var ban = validarCorreo(email);
        if(ban == false){
            return false;
        }
    }

    if(contra > 0 && contrac > 0){
        var ban = confirmarContraseña(contra,contrac);
        if (ban == false){
            return false;
        }
    }

    alert("Registro exitoso");
    
};

function validarfecha(inputText) {
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var fecha_Nac = inputText;
    if (fecha_Nac.match(dateformat)) {
        document.registrarse.fecha_Nac.focus();

        var opera1 = fecha_Nac.split('/');
        var opera2 = fecha_Nac.split('-');
        lopera1 = opera1.length;
        lopera2 = opera2.length;


        if (lopera1 > 1) {
            var pdate = fecha_Nac.split('/');
        } else if (lopera2 > 1) {
            var pdate = fecha_Nac.split('-');
        }
        var dd = parseInt(pdate[0]);
        var mm = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);


        if (yy < 1900 || yy > 2020) {
            alert("LA FECHA DEBE ESTAR ENTRE 1900 - 2020");
            return false;
        }


        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (mm == 1 || mm > 2) {
            if (dd > ListofDays[mm - 1]) {
                alert("Formato de fecha no valido!");
                return false;
            }
        }
        if (mm == 2) {
            var lyear = false;
            if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                lyear = true;
            }
            if ((lyear == false) && (dd >= 29)) {
                alert("Formato de fecha no valido!");
                return false;
            }
            if ((lyear == true) && (dd > 29)) {
                alert("Formato de fecha no valido!");
                return false;
            }
        }
    } else {
        alert("FORMATO DE FECHA INVALIDO");
        return false;
    }
};


function validarCorreo(inputText){
    var Email = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if (Email.test(inputText) == false){
        alert('Dirección de correo no valida');
        return false;
    }
};

function confirmarContraseña(inputText,inputText2){
    if(inputText.length < 8){
        alert("Use al menos 8 caracteres");
        return false;
    }else if((inputText === inputText2) == false){
        alert("Las contraseñas no coinciden");
        return false;
    }
}

