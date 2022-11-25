"use strict";

let macBook = document.querySelector('.header__img'),
    text = document.querySelector('.header__titel'),
    letter = document.querySelectorAll('.header__text');

function moveLeeter() {
  let sizeLetter = 82,
      sizeImg = 1100,
      opacity = 0;

  let id = setInterval(frame, 25);

  function frame() {
    sizeImg-- ;
    sizeLetter++;
    opacity++;

    for(let i of [0, 1]) {
      letter[i].style.marginRight = sizeLetter + 'px';
    }

    text.style.opacity = opacity + '%';
    macBook.style.width = sizeImg + 'px';

    
    if (sizeImg == 950 || sizeLetter == 155) {
      clearInterval(id);
    }
  }
}

moveLeeter();