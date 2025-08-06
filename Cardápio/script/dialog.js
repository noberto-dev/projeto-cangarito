const dialog = document.querySelector('dialog');
const produtos = document.querySelectorAll('.grade-produtos article')

produtos.forEach(produto => {
    produto.addEventListener('click', () => {
        const imgSrc = produto.querySelector('img').src
        const nome = produto.querySelector('h3').textContent
        const preco = produto.querySelector('h2').textContent
        const descProduto = produto.querySelector('.desc-produto').textContent

        dialog.innerHTML = `
                <div id="header-dialog">
                <span class="sair-dialog">
                  <i id="fechar-dialog" class="bi bi-chevron-compact-down"></i>
                </span>
                <h1>${nome}</h1>
              </div>
              <div class="info-dialog">
                <div class="container-tags-produto">
                  <div class="tags-produto">
                  <p>300g</p>
                </div>
                <img src="${imgSrc}" alt="">
                <p class="desc-produto">
                ${descProduto}
                </p>
              </div>
              <label for="observacao-dialog">Alguma Observação?</label>
              <textarea name="observacao-dialog" id="observacao-dialog"></textarea>

              <div class="footer-dialog">
                <div class="botao-adicionar"></div>
                <button class="adicionar-dialog">Adicionar + ${preco}</button>
              </div>`

              dialog.showModal()
              document.getElementById('fechar-dialog').addEventListener('click', ()=> {
                dialog.close()
              })
    })
})