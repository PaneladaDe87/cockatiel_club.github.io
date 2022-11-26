var valido;

function login() {
    var senha = documents.login-inputs.senha.value;
    var gmail = documents.login-inputs.gmail.value;
    var cpf = documents.login-inputs.cpf.value;
    var rg = documents.login-inputs.rg.value;
    var codigo = documents.login-inputs.codigo.value;

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
        window.location="index.html";
    }
}
