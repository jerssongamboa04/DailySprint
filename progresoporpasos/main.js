const btnNext = document.querySelectorAll('.btn');
const divProgres = document.querySelector('.progress-container');

let lastActiveIndex = 1;

btnNext.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target.id === 'next') {
      if (lastActiveIndex < divProgres.children.length) {
        divProgres.children[lastActiveIndex].classList.add('active');
        lastActiveIndex++;
      }
    } else if (e.target.id === 'prev') {
      if (lastActiveIndex > 0) {
        lastActiveIndex--;
        divProgres.children[lastActiveIndex].classList.remove('active');
      }
    }
    if (lastActiveIndex == divProgres.children.length) {
      btnNext[1].disabled = true;
      btnNext[0].disabled = false;
     
    }
    if (lastActiveIndex < 4) {
        btnNext[1].disabled = false;
      }
    if (lastActiveIndex == 1) {
      btnNext[0].disabled = true;
      btnNext[1].disabled = false;
    }

    if (lastActiveIndex > 1) {
        btnNext[0].disabled = false;
      }
    
  });
});
