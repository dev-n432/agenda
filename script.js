const form = document.querySelector("#formulario");
const remove = document.querySelector("#remover");

let cadastros = "";

form.addEventListener("submit",function(e){
    e.preventDefault();

    adicionarCadastro();
    atualizarTabela();
})


function adicionarCadastro(){
    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const numero = document.querySelector("#numero");

    let novoCadastro = "<tr>";

    novoCadastro += `<td>${nome.value} ${sobrenome.value}</td>`;
    novoCadastro += `<td>${numero.value}</td>`;

    novoCadastro += "</tr>";

    cadastros += novoCadastro;

    nome.value = "";
    sobrenome.value = "";
    numero.value = "";
}

function atualizarTabela(){   
    document.querySelector("tbody").innerHTML = cadastros;
}

