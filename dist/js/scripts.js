'use strict';

var makeArray = function makeArray(r) {
  return [].slice.call(r, 0);
};
var randomColor = function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

var randomBackgrounds = makeArray(document.getElementsByClassName('🐿'));
var constantRandomBackgrounds = makeArray(document.getElementsByClassName('🦄'));

if (randomBackgrounds && randomBackgrounds.length) {
  for (var i = 0; i < randomBackgrounds.length; i++) {
    randomBackgrounds[i].style.backgroundColor = randomColor();
  }
}

if (constantRandomBackgrounds && constantRandomBackgrounds.length) {
  constantRandomColor();
}

function constantRandomColor() {
  for (var i = 0; i < constantRandomBackgrounds.length; i++) {
    constantRandomBackgrounds[i].style.backgroundColor = randomColor();
  }

  setTimeout(function () {
    constantRandomColor();
  }, 500);
}
//# sourceMappingURL=scripts.js.map
