const box = document.createElement('div');
const settings = document.querySelector('button');
const nodes = ''
let pixels = 16
box.classList = 'box';



// sets up grid
function createCanvas() {
  for (i = 0; i <= pixels * pixels -1; i++) {
    let color = 'black';
    box.style.backgroundColor = color;
    box.style.height = `${72/pixels}vw`
    box.style.width = `${72/pixels}vw`
    
    document.querySelector('.canvas').appendChild(box.cloneNode(true));
  };
  // adds event listener to boxes.
  const nodes = document.querySelectorAll('.box');
  nodes.forEach(node => node.addEventListener('mouseover', changeColor));
};



// generates random number between 0 and 255
function randomNumber() {
  return Math.floor(Math.random()*255);
};

// generates random rgb color
function randomColor() {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

//changes color on hover
function changeColor(e) {
  this.style.backgroundColor = randomColor();
  e.stopPropagation()
};

// settings button functionality
function adjustSettings() {
  pixels =  window.prompt("How many pixels per side do you want: ");
  document.querySelector('.canvas').innerHTML = '';
  createCanvas()
  nodes.forEach(node => node.addEventListener('mouseover', changeColor));
}

// Settings event listener
const settingsButton = document.querySelector('button')
settingsButton.addEventListener('click', adjustSettings);


createCanvas();
