function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if (user === "admin" && password === "123") {
        window.location.href = "inicio.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// Modo nocturno
const toggleModeBtn = document.getElementById("toggleMode");
const body = document.body;

// Cargar modo nocturno si estaba activado
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleModeBtn.textContent = "☀️ Modo Claro";
}

toggleModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleModeBtn.textContent = "☀️ Modo Claro";
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggleModeBtn.textContent = "🌙 Modo Nocturno";
    }
});
