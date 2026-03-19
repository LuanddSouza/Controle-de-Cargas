let select = document.getElementById("select_estab");

let estabelecimentos = ["Nutrepampa Matriz", "Nutrepampa Teutonia", "Nutrepampa Santa Catarina"];

estabelecimentos.forEach(estab => {
    let option = document.createElement("option");
    option.value = estab;
    option.textContent = estab;

    select.appendChild(option);
});