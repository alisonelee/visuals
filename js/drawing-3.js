// Drawing 3
var x = 150;
var y = 150;
var speed = 10;
var link;

function setup() {
  createCanvas(1000, 300);
  xpos = width/2;
  ypos = height/2;
}

function draw() {
	stroke(255);

  rectMode(CORNER);
  noStroke();

  fill(236,227,217);
  stroke(30);
  rect(10, 10, 980, 280);

  if ((mouseX >= 400 && mouseX <= 585) && (mouseY >= 100 && mouseY <= 150)) {
    cursor(HAND);
    link = true;
  } else {
    cursor(ARROW);
    link = false;
  }
   //  ellipseMode(CENTER);
   //  fill(255,182,193);
   //  ellipse(x, y, 200, 200);

   //  x += speed;
   //  y += speed - 2;

   //  if ((x > width) || (x < 0)) {
   //  	speed = speed * -1;
  	// }
  	// if ((y > height) || (y <0)) {
  	// 	speed = speed * -1;
  	// }

  noStroke();
  fill(0);
  text("spring", 400, 150); 
  textFont("Grouch");
  textSize(50);
}

function mousePressed() {
  if (link == true) {
    window.open( "drawing-3.html", "_blank");
  }
}