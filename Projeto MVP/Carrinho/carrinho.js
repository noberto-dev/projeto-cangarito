let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const botaoAdicionar = document.querySelector(".romeritoadicoes");

let nome = document.getElementById("nome");
let categoria = document.getElementById("categoria");
let quantidade = document.getElementById("quantidade");
let valor = document.getElementById("valor");

botaoAdicionar.addEventListener("click", () => {
    const nomePodado = nome.value.trim();
    const categoriaPodado = categoria.value.trim();
    const quantidadePodado = quantidade.value.trim();
    const valorPodado = valor.value.trim();

    if (!nomePodado || !categoriaPodado) return alert ("Campo(s) obrigatório(s)")
    if (quantidadePodado <= 0 || valorPodado <= 0 ) return alert ("Valor inválido")

    const item = {
        id: Date.now(),
        nome: nomePodado,
        categoria: categoriaPodado,
        quantidade: quantidadePodado,
        valor: valorPodado
    };

    carrinho.push(item);
     localStorage.setItem("carrinho", JSON.stringify(carrinho));
})