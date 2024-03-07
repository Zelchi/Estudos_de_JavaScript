// const cliente = {
//     nome: "Andre",
//     idade: 32,
//     cpf: "1122233345",
//     email: "andre@dominio.com",
// };

// console.log(
//     `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
// );

// const chaves = ["nome", "idade", "cpf", "email", "altura"];

// chaves.forEach((chave) => {
//     console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
// });

// https://cursos.alura.com.br/course/javascript-conhecendo-objetos/task/150900

const livro = {
    titulo: "O Fim",
    autor: "José",
    anoDePublicacao: "2014",
    genero: "Drama",
};

// const anoAtual = 2024

// livro.idadePublicacao = anoAtual - livro.anoDePublicacao

// livro.mostrarDetalhes = "Detalhes do Livro:\n" +
//     "Título: " + livro.titulo + "\n" +
//     "Autor: " + livro.autor + "\n" +
//     "Ano de Publicação: " + livro.anoDePublicacao + "\n" +
//     "Gênero: " + livro.genero + "\n" +
//     "Idade de Publicação: " + livro.idadePublicacao + " anos";

// console.log(livro.mostrarDetalhes)

// console.log("------------");
// console.log(livro["titulo"]);
// console.log(livro["autor"]);
// console.log(livro["anoDePublicacao"]);
// console.log(livro["genero"]);

livro.genero = "Aventura";
livro.data = "10/07"
livro.certificado = "Aprovado"
delete livro.autor

console.log(livro)