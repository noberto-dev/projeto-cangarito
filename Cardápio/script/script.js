const diasSemanaMinimized = document.getElementById('dias-semana-minimized')
const diasSemanaExpand = document.getElementById('dias-semana-expand')

diasSemanaMinimized.addEventListener('click', () =>{
    const aberto = diasSemanaExpand.classList.toggle('open');
    
    tempoTimeout = aberto ? 10 : 300
    let timeoutIDAberto = setTimeout(() => {
    if (aberto){
        diasSemanaMinimized.style.borderRadius = '16px 16px 0 0';
    }else {
        diasSemanaMinimized.style.borderRadius = '16px';
    }
    }, tempoTimeout);
})

