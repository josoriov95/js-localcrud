const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const correo = document.querySelector("#correo").value;
    const pass = document.querySelector("#pass").value;

    const Users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = Users.find(user => user.correo === correo && user.pass === pass);
    if(!validUser){
        return alert("Usuario y/o contraseña incorrecta");
    }
    localStorage.setItem("login_success", JSON.stringify(validUser));
    alert("Bienvenido "+ validUser.nombre);
    window.location.href = "index.html";
});