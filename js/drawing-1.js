// Drawing 1
var rectX, rectY;
var rectOver = false; 
var rectColor = 0;
var link;

function setup() {
  createCanvas(1000, 300);
}

function draw() {

  

	stroke(220);

  rectMode(CORNER);
  noStroke();

  fill(236,227,217);
  stroke(30);
  rect(10, 10, 980, 280);


  if ((mouseX >= 450 && mouseX <= 560) && (mouseY >= 100 && mouseY <= 150)) {
    cursor(HAND);
    link = true;
  } else {
    cursor(ARROW);
    link = false;
  }

  // Papers - L to R
  fill(255);
  noStroke();

  rect(40, 40, 110, 170);
  rect(190, 90, 150, 100);
  rect(190, 210, 70, 80);

  // Tape - L to R
  fill(0);

  rect(55, 35, 80, 10);
  rect(205, 85, 120, 10);
  rect(205, 205, 40, 10);

  fill(0);
  text("fall", 450, 150); 
  textFont("Grouch");
  textSize(50);
  
}

function mousePressed() {
  if (link == true) {
    window.open( "drawing-1.html", "_blank");
  }
}