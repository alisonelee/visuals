// Drawing 3
var x = 150;
var y = 150;
var speed = 10;
var link;
var a = 0.0;
var s = 0.0;

// Coordinates of label
var ly;
var speed;

var e1, e2, e3, e4, e5, e6, e7, e8;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  xpos = width/2;
  ypos = height/2;

  // Initial positions for labels
  ly = 600;
  speed = 3;
}

function draw() {

	stroke(255);

  rectMode(CORNER);
  noStroke();

  fill(236,227,217);
  rect(0, 0, window.innerWidth, window.innerHeight);

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
  textSize(50); 
  text("spring", 400, 150); 
  textFont("Grouch");
   

  // Label
  rect(0, ly, 200, 30);

  // Increment the value of x
  ly += speed;

  // Constraints
  if ((ly > height - 50) || (ly < 300)) {
     speed = speed * -1;
  }

  fill(255);
  textSize(10);

  text("Cool Blue - The Japanese House", 0, ly + 20);

  a = a + 0.09;
  s = cos(a) * 1.5;

  translate(width/2, height/2);
  scale(s); 
  fill(51);
  ellipse(0, 0, 50, 50); 
  

  translate(75, 0);
  fill(220);
  scale(s);
  ellipse(0, 0, 50, 50);  
}

function mousePressed() {
  if (link == true) {
    window.open( "spring.html", "_blank");
  }
  
  scale(0.5);
}