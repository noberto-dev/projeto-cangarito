let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const botaoAdicionar = document.querySelector(".romeritoadicoes");
const listaContainer = document.querySelector(".carrinho_div");

let nome = document.getElementById("nome");
let categoria = document.getElementById("categoria");
let quantidade = document.getElementById("quantidade");
let valor = document.getElementById("valor");

let lista_pedido = [];

// Cálculo (3.3?)
function calcularTotais() {
    let totalGeral = 0;
    let quantidadeItens = 0;
    let somaValorUnitario = 0;

    carrinho.forEach(item => {
        totalGeral += item.quantidade * item.valor;
        quantidadeItens += Number(item.quantidade);
        somaValorUnitario += Number(item.valor);
    });

    const mediaValorUnitario = carrinho.length
        ? somaValorUnitario / carrinho.length
        : 0;

    return { totalGeral, quantidadeItens, mediaValorUnitario };
}

// 3.2
function atualizarLista() {
    listaContainer.innerHTML = "";

    carrinho.forEach(item => {
        const article = document.createElement("article");
        article.classList.add("item");

        article.innerHTML = `
            <div class="info">
                <span class="nome_food">Nome do prato: ${item.nome}</span><br>
                <span class="info_comida">Categoria: ${item.categoria}</span><br>
                <span class="info_comida">Quantidade: ${item.quantidade}</span><br>
                <span class="preço">Valor: R$ ${Number(item.valor).toFixed(2)}</span>
            </div>
            <button class="remover_bt">X</button>
        `;

        article.querySelector(".remover_bt").addEventListener("click", () => {
            carrinho = carrinho.filter(i => i.id !== item.id);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            atualizarLista();
        });

        listaContainer.appendChild(article);
    });

    mostrarMetricas();
}


// 3.3
function mostrarMetricas() {
    const { totalGeral, quantidadeItens, mediaValorUnitario } = calcularTotais();

    let metricas = document.getElementById("metricas");

    if (!metricas) {
        metricas = document.createElement("div");
        metricas.id = "metricas";
        listaContainer.after(metricas);
    }

    metricas.innerHTML = `
        <p> <strong> Total geral: </strong> R$ ${totalGeral.toFixed(2)}  | </p>
        <p> <strong> Quantidade de itens: </strong> ${quantidadeItens}  | </p>
        <p> <strong> Média do valor unitário: </strong> R$ ${mediaValorUnitario.toFixed(2)} </p>
    `;
}


// 3.1
botaoAdicionar.addEventListener("click", () => {
    const nomePodado = nome.value.trim();
    const categoriaPodado = categoria.value.trim();
    const quantidadePodado = Number(quantidade.value);
    const valorPodado = Number(valor.value);

    if (!nomePodado || !categoriaPodado) {
        alert("Campo(s) obrigatório(s)");
        return;
    }

    if (quantidadePodado <= 0 || valorPodado <= 0) {
        alert("Valor inválido");
        return;
    }

    const item = {
        id: Date.now(),
        nome: nomePodado,
        categoria: categoriaPodado,
        quantidade: quantidadePodado,
        valor: valorPodado
    };

    const pedido = {
        nome: nomePodado,
        categoria: categoriaPodado,
        totalGeral: quantidadePodado * valorPodado,
        quantidadeItens: quantidadePodado
    };

    lista_pedido.push(pedido);
    carrinho.push(item);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarLista();
});

atualizarLista();