// EXERCÍCIO 01
window.addEventListener ('load', () => {
    
    let buttonVerMais = document.querySelector('#more');
    buttonVerMais.onclick = (evento) => {
        let posts = document.querySelector('main.container');

            let publi = document.querySelector('.card');
            let publi_clone = publi.cloneNode(true);
            posts.insertBefore(publi_clone, buttonVerMais);
    }
})


// EXERCÍCIO 02

const toggleHeart = (elemento) => {
    let heart = elemento;
    console.log(heart.src);
    if (heart.src.includes('/img/icons/heart.svg')) {
        heart.src = 'img/red-heart.png';

        //exercicio 4
        heart.nextElementSibling.innerHTML = '1 like'
    } else {
        heart.src = '/img/icons/heart.svg'

        //exercicio 4
        heart.nextElementSibling.innerText = '0 like'
    }
};


// EXERCÍCIO 03
window.addEventListener ('load', () => {

    let pesquisa = document.querySelector('.busca');
    pesquisa.onmouseover = (evento) => {
    pesquisa.style.cssText = 'box-shadow: 0px 1px 3px black';
    }
})


// EXERCÍCIO 04
window.addEventListener ('load', () => {

    let pesquisa = document.querySelector('.busca');
    pesquisa.onmouseout = (evento) => {
    pesquisa.style.cssText = 'box-shadow: none';
    }
})

window.addEventListener ('load', () => {
    let buttonVerMais = document.querySelector('#more');
    buttonVerMais.onmouseover = (evento) => {
        buttonVerMais.style.cursor = "pointer";
    }
})




