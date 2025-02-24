function login() {
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    if (correo === "admin" && contrasena === "123") {
        window.location.href = "inicio.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}


