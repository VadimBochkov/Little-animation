"use strict";

let macBook = document.querySelectorAll('.header__img'),
    title = document.querySelectorAll('.header_title'),
    letter = document.querySelectorAll('.header__text');

function moveLeeter() {
  let size = 82;

  let id = setInterval(frame, 34);

  function frame() {
    size++;

    for(let i of [0, 1]) {
      letter[i].style.marginRight = size + 'px'; 
    }
        
    if (size == 165) {
      clearInterval(id);
    }    
  }
}

moveLeeter();