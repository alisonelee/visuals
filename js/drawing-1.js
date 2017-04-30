// Drawing 1
var rectX, rectY;
var rectOver = false; 
var rectColor = 0;

function setup() {
  createCanvas(1000, 300);
}

function draw() {

	stroke(220);

  rectMode(CORNER);
  noStroke();
  if ((mouseX >= 50 && mouseX <= 350) && (mouseY >= 50 && mouseY <= 400)) {
    fill(236,227,217);
    stroke(30);
    rect(10, 10, 980, 280);
   }
  else {
    fill(236,227,217);
    stroke(30);
    rect(10, 10, 980, 280);
  }
}
