// Drawing 3
var x = 150;
var y = 150;
var speed = 10;
var link;
var a = 0.0;
var s = 0.0;

var e1, e2, e3, e4, e5, e6, e7, e8;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  xpos = width/2;
  ypos = height/2;
}

function draw() {

  a = a + 0.05;
  s = cos(a) * 2;

	stroke(255);

  rectMode(CORNER);
  noStroke();

  fill(236,227,217);
  rect(0, 0, window.innerWidth, window.innerHeight);

  // if ((mouseX >= 400 && mouseX <= 585) && (mouseY >= 100 && mouseY <= 150)) {
  //   cursor(HAND);
  //   link = true;
  // } else {
  //   cursor(ARROW);
  //   link = false;
  // }

  // Bubbles - L to R
  noStroke();
  fill(255);

  //  Inspired by https://processing.org/examples/
  ellipseMode(CENTER);
  var r1 = map(mouseX, 0, width, 0, height-40);
  var r2 = height-40-r1;
  
  fill(r1);
  ellipse(width/2 + r1/2, height/2, r1, r1);
  
  fill(r2);
  ellipse(width/2 - r2/2, height/2, r2, r2);

  ellipse(x+200, y+30, 50, 50);

  ellipse(x+250, y+10, 20, 20);

  ellipse(x+400, y, 50, 50);

  ellipse(x+500, y+50, 85, 85);

  ellipse(x+500, y-100, 30, 30);

  ellipse(x+560, y-80, 70, 70);

  ellipse(x+700, y+30, 50, 50);

  ellipse(x+770, y-80, 100, 100);

  noStroke();
  fill(0);
  text("spring", 400, 150); 
  textFont("Grouch");
  textSize(50);  
}

function mousePressed() {
  if (link == true) {
    window.open( "spring.html", "_blank");
  }
  
  scale(0.5);
}