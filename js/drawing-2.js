// Drawing 2
var pxd;
var pxWidth;
var pxHeight;
var link;

function setup() {
  createCanvas(1000, 300);
}

function draw() {
  rectMode(CORNER);
  noStroke();

  fill(236,227,217);
  stroke(30);
  rect(10, 10, 980, 280);

  if ((mouseX >= 400 && mouseX <= 600) && (mouseY >= 100 && mouseY <= 150)) {
    cursor(HAND);
    link = true;
  } else {
    cursor(ARROW);
    link = false;
  }

  noStroke();
  fill(0);
  text("winter", 400, 150); 
  textFont("Grouch");
  textSize(50);
}

function mousePressed() {
  if (link == true) {
    window.open( "drawing-2.html", "_blank");
  }
}