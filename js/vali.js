function validacion() {
    let formulario = document.getElementById("formu");
    let name = document.getElementById("names");
    let lastname = document.getElementById("latsname");
    let mail = document.getElementById("mail");
    let phone = document.getElementById("tele").value;

    let valuemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (name.value.length < 4 || name.value.length == 0) {

        alert("Nombre invalido, ingrese nuevamente");
        return false;
    }

    if (lastname.value.length < 4 || lastname.value.length == 0) {

        alert("Apellido invalido, ingrese nuevamente");
        return false;
    }


    if (!valuemail.test(mail.value)) {

        alert("Correo invalido, ingrese nuevamente");
        return false;

    }

    if (isNaN(phone)) {

        alert("Teléfono invalido, ingrese nuevamente");
        return false;
    }

    return true;
}


function validar() {
    if (validacion() == false) {

        return false;
    }

    else
        return true;

}





window.onload = validar();