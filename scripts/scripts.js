var valido;

function login() {
    var senha = documents.login.senha.value;
    var gmail = documents.login.gmail.value;
    var cpf = documents.login.cpf.value;
    var rg = documents.login.rg.value;
    var codigo = documents.login.codigo.value;

    gmail = gmail.toLowerCase();
    senha = senha.toLowerCase();
    cpf = cpf.toLowerCase();
    rg = rg.toLowerCase();
    codigo = codigo.toLowerCase();

    if (valido == 0) {
        alert('senha ou email incorretos');
    }

    if (senha = "18007402009853199966805300" && gmail = "null" && cpf = "000.000.000-00" && rg = null && codigo = "000a000a000") {
        valido = 1;
        window.open="index.html";
    }
}
