"use strict";

let macBook = document.querySelector('.header__img'),
    text = document.querySelector('.header__titel'),
    letter = document.querySelectorAll('.header__text');

function moveLeeter() {
  let sizeLetter = 82,
      sizeImg = 1100,
      opacity = 8;

  let id = setInterval(frame, 25),
      id2 = setInterval(mac, 25);

  function frame() {
    sizeImg--;
    sizeLetter++;
    opacity++;

    for(let i of [0, 1]) {
      letter[i].style.marginRight = sizeLetter + 'px';
    }

    text.style.opacity = opacity + '%';
    macBook.style.width = sizeImg + 'px';
    
    if (sizeLetter == 155) {
      clearInterval(id);
    }
  }

  function mac() {
    sizeImg--;

    macBook.style.width = sizeImg + 'px';
    
    if (sizeImg == 950) {
      clearInterval(id2);
    }
  }
}

moveLeeter();