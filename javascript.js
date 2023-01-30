function llamarFunciones(){
    validateEmail();
    checkForm();
    checkPassword()
}

function validateEmail() {

    const email = document.getElementById("email").value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Email no válido");
      return false;
    }
    return true;

}

function checkForm() {

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const contrasenia = document.getElementById("contrasenia").value;

    if (nombre === "" || email === "" || message === "" || contrasenia === "") {
        alert("Todos los campos son requeridos");
        return false;
    }

    return true;
}

function checkPassword() {
    var password = document.getElementById("contrasenia").value;
    var hasNumber = /\d/.test(password);
    if (!hasNumber || password.length < 9) {
        document.getElementById("contrasenia").classList.add("invalid");
        setTimeout(checkPassword, 10);
        alert("La contraseña debe contener al menos 9 caracteres y un número");
        return false;
    }
    return true;
  }