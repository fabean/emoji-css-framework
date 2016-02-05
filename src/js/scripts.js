window.onload = () => {


let makeArray = (r) => [].slice.call(r,0);
let randomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);

let randomBackgrounds = makeArray(document.getElementsByClassName('🐿'));
let constantRandomBackgrounds = makeArray(document.getElementsByClassName('🦄'));


if (randomBackgrounds && randomBackgrounds.length) {
  for (let i=0; i<randomBackgrounds.length; i++) {
    randomBackgrounds[i].style.backgroundColor = randomColor();
  }
}

if (constantRandomBackgrounds && constantRandomBackgrounds.length) {
  constantRandomColor();
}

function constantRandomColor() {
  for (let i=0; i<constantRandomBackgrounds.length; i++) {
    constantRandomBackgrounds[i].style.backgroundColor = randomColor();
  }

  setTimeout(function(){
    constantRandomColor()
  }, 500);
}

}
