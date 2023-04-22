const btnNext = document.querySelectorAll('.btn');
const divProgres = document.querySelector('.progress-container');

let lastActiveIndex = 0;
const progressBarWidth = 33.33;

console.log(divProgres.children.length);

btnNext.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target.id === 'next') {
      if (lastActiveIndex < divProgres.children.length) {
        lastActiveIndex++;
        console.log(lastActiveIndex);
        divProgres.children[lastActiveIndex + 1].classList.add('active');
        divProgres.children[0].style.width = `${progressBarWidth * lastActiveIndex}%`;
      }
    } else if (e.target.id === 'prev') {
      if (lastActiveIndex > 0) {
        divProgres.children[lastActiveIndex + 1].classList.remove('active');
        lastActiveIndex--;
        divProgres.children[0].style.width = `${progressBarWidth * lastActiveIndex}%`;
      }
    }
    if (lastActiveIndex === divProgres.children.length - 2) {
      btnNext[1].disabled = true;
      btnNext[0].disabled = false;
    }
    if (lastActiveIndex < divProgres.children.length - 2) {
      btnNext[1].disabled = false;
    }
    if (lastActiveIndex === 0) {
      btnNext[0].disabled = true;
      btnNext[1].disabled = false;
    }
    if (lastActiveIndex > 0) {
      btnNext[0].disabled = false;
    }
  });
});
