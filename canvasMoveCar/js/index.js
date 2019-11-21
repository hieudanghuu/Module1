

// function Rectangle(x, y, w, h, color) {
//   this.x = x;
//   this.y = y;
//   this.w = w;
//   this.h = h;
//   this.color = color;
//   this.distance = 2;

//   this.drawRec = function(ctx) {
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.w, this.h);
//   }

//   this.moveDown = function() {
//     this.y += this.distance;
//   }
// }

// let colorR = ranNum();
// let colorG = ranNum();
// let colorB = ranNum();

// let color = "rgb("+colorR+", "+colorG+", "+colorB+")";

// let rec1 = new Rectangle(10, 10, 50, 60, color);
// let rec2 = new Rectangle(60, 60, 50, 60, color);

// function ranNum() {
//   return Math.floor(Math.random()*256);
// }



// function updateRect() {
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//   rec1.drawRec(ctx);
  
//   rec1.moveDown();
//   requestAnimationFrame(updateRect, 1000);
  
// }

// updateRect();

function Car(x, y, img) {
  this.x = x;
  this.y = y;
  this.imageObj = img;
  this.distance = 2;
  this.direction = 4;

  this.drawImg = function(ctx) {
    ctx.drawImage(this.imageObj, this.x, this.y, 50, 50);
  }

  this.moveDown = function() {
    this.y += this.distance;
  }

  this.moveRight = function() {
    this.x += this.distance;
  }

  this.moveLeft = function() {
    this.x -= this.distance;
  }

  this.moveUp = function() {
    this.y -= this.distance;
  }
}

  let myCanvas = document.getElementById("myCanvas");
  let myImage = document.getElementById("myImage");
  let ctx = myCanvas.getContext("2d");
  let imageObj = new Image();
  imageObj.src = myImage.src;
  let img1 = new Car(30, 30, imageObj);

window.onload = function() {
  
  
  
  updateCar();
}

document.addEventListener('keyup', move);

const MOVERIGHT = 39.
    MOVEDOWN = 40,
    MOVELEFT = 37,
    MOVEUP = 38;

function move(e) {
    switch (e.keyCode) {
        case MOVERIGHT:
        case 68:    
            img1.direction = 3;
            break;
        case MOVEDOWN:
            img1.direction = 4;
            break;
          case MOVELEFT:
          img1.direction = 1;
          break;
          case MOVEUP:
          img1.direction = 2;
          break;
               
    }
}

function updateCar() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  img1.drawImg(ctx);

  if(img1.direction == 3) img1.moveRight();
  if(img1.direction == 4) img1.moveDown();
  if(img1.direction == 1) img1.moveLeft();
  if(img1.direction == 2) img1.moveUp();
  
  requestAnimationFrame(updateCar, 1000);
}

