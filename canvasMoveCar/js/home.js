document.addEventListener('keyup', move);
let objObg = document.getElementById('imgObj');

let leftMove = 10;
let topMove = 0;

const MOVERIGHT = 39.
    MOVEDOWN = 40;

function move(e) {
    switch (e.keyCode) {
        case MOVERIGHT:
        case 68:    
            carMoveRight();
            break;
        case MOVEDOWN:
            topMove += 10;
            objObg.style.top = topMove + 'px';
    }
}

function carMoveRight() {
    leftMove += 5;
    objObg.style.left = leftMove + 'px';
}

let age = 18;

let isAge = age >= 18 ? true : false;

// alert(isAge);

let myCanvas = document.getElementById('mycanvas');
let ctx = myCanvas.getContext('2d');

let colorR = randomNum();
let colorB = randomNum();
let colorG = randomNum();
let color = "rgb("+ colorR + "," + colorB + ", " + colorG + ")";

ctx.fillStyle = color;
ctx.fillRect(10,10,50,50);

function randomNum() {
  return Math.floor(Math.random()*256);
}

