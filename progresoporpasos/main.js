
const btns = document.querySelectorAll('.btn')

btns.forEach( (btn) => {

btn.addEventListener('click', () => { 

    removeActiveClasses();
    btn.classList.add('active');

    console.log(btn);
})
});

function removeActiveClasses() {
    
    btns.forEach(btn => {
        btn.classList.remove('active');
    })


}