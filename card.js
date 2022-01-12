const cartaoQuim = document.querySelector('.cartao__interior--quim');

cartaoQuim.addEventListener('click', function (){
    cartaoQuim.classList.toggle('is-flipped');
});

const cartaoBio = document.querySelector('.cartao__interior--bio');

cartaoBio.addEventListener('click', function (){
    cartaoBio.classList.toggle('is-flipped');
});

const cartaoFis = document.querySelector('.cartao__interior--fis');

cartaoFis.addEventListener('click', function (){
    cartaoFis.classList.toggle('is-flipped');
});