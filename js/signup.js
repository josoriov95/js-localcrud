const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const pass = document.querySelector("#pass").value;

    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserRegistered = Users.find(user => user.correo === correo);
    if (isUserRegistered) {
        return alert("Ya existe un usuario con ese correo " + correo);
    }

    Users.push({nombre: nombre, correo: correo, pass: pass});
    localStorage.setItem('users', JSON.stringify(Users));

    alert("Registro Exitoso!");

    window.location.href = "login.html";
});