
const btnGiro = document.querySelector('#open');
const btnClose = document.querySelector('#close');
const divContainerGiro = document.querySelector('.container');
console.log(divContainerGiro);


btnGiro.addEventListener('click',  (e) => { 

divContainerGiro.classList.add('show-nav');

})


btnClose.addEventListener('click',  (e) => { 

    divContainerGiro.classList.remove('show-nav');

});