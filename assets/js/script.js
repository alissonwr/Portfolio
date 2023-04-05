
    function ativaLetra(e){
        const arrTexto = e.innerHTML.split('');
        e.innerHTML = '';
        arrTexto.forEach((Letra, i) => {
            setTimeout(()=>{
                e.innerHTML += Letra;
            }, 75 * i)
        });
    }
    
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);  


const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})


