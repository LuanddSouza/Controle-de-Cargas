document.getElementById("entrar").addEventListener("click", function () {

    let user = document.getElementById("campo_user").value;
    let pass = document.getElementById("campo_pass").value;

    console.log(`usuario: ${user} Senha: ${pass}`);

    if (!user || !pass) {
        Toastify({
            text: "Preencha todos os campos!",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#f39c12"
        }).showToast();
        return;
    }

    if (user == 'admin' && pass == '123') {
        Toastify({
            text: "Login realizado com sucesso!",
            duration: 1000,
            gravity: "top",
            position: "right",
            backgroundColor: "#14710A"
        }).showToast();

        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000);

    } else {
        Toastify({
            text: "Usuário ou senha inválidos!",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#e74c3c"
        }).showToast();
    }
});