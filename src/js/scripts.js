let randomBackgrounds = makeArray(document.getElementsByClassName('🐿'));
let constantRandomBackgrounds = makeArray(document.getElementsByClassName('🦄'));


if (randomBackgrounds && randomBackgrounds.length) {
  for (let i=0; i<randomBackgrounds.length; i++) {
    randomBackgrounds[i].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }
}

if (constantRandomBackgrounds && constantRandomBackgrounds.length) {
  constantRandomColor();
}



function constantRandomColor() {
  for (let i=0; i<constantRandomBackgrounds.length; i++) {
    constantRandomBackgrounds[i].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  setTimeout(function(){
    constantRandomColor()
  }, 500);
}

function makeArray(r){return[].slice.call(r,0)}
