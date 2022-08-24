const box = document.createElement('div');
box.classList = 'box';

function randomNumber() {
  return Math.floor(Math.random()*255);
};

function randomColor() {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

for (i = 0; i <= 255; i++) {
  let color = 'black';
  box.style.backgroundColor = color;
  document.querySelector('.container').appendChild(box.cloneNode(true));
};

const nodes = document.querySelectorAll('.box');

function changeColor(e) {
  // console.log(e)
  this.style.backgroundColor = randomColor();

  e.stopPropagation()
};

nodes.forEach(node => node.addEventListener('mouseover', changeColor));
