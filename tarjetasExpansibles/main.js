const btnNext = document.querySelectorAll('.btn');
const divProgres = document.querySelector('.progress-container');

let lastActiveIndex = 0;

btnNext.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target.id === 'next') {
      if (lastActiveIndex < divProgres.children.length - 1) {
        divProgres.children[lastActiveIndex].classList.add('active');
        divProgres.classList.add('active');
        lastActiveIndex++;
      }
      if (lastActiveIndex === divProgres.children.length - 1) {
        btnNext[1].classList.add('btn:disabled');
      }
      if (lastActiveIndex > 0) {
        btnNext[0].classList.remove('btn:disabled');
      }
    } else if (e.target.id === 'prev') {
      if (lastActiveIndex > 0) {
        divProgres.children[lastActiveIndex - 1].classList.remove('active');
        divProgres.classList.remove('active');
        lastActiveIndex--;
      }
      if (lastActiveIndex === 0) {
        btnNext[0].classList.add('btn:disabled');
      }
      if (lastActiveIndex < divProgres.children.length - 1) {
        btnNext[1].classList.remove('btn:disabled');
      }
    }
  });
});
