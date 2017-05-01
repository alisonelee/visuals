// Drawing 3
var x = 150;
var y = 150;
var speed = 10;
var link;
var a = 0.0;
var s = 0.0;

function setup() {
  createCanvas(1000, 300);
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
  stroke(30);
  rect(10, 10, 980, 280);

  

  if ((mouseX >= 400 && mouseX <= 585) && (mouseY >= 100 && mouseY <= 150)) {
    cursor(HAND);
    link = true;
  } else {
    cursor(ARROW);
    link = false;
  }

  // Bubbles - L to R
  noStroke();
  fill(255);
  ellipseMode(CENTER);

  //scale(s); 
  if ((mouseX >= x+200 && mouseX <= x+250) && (mouseY >= y+30 && mouseY <= y+80)) {
    scale(2);
  }
  else {
    scale(1);
  }
  ellipse(x+200, y+30, 50, 50);


  //scale(s); 
  ellipse(x+250, y+10, 20, 20);

  //scale(s); 
  ellipse(x+400, y, 50, 50);

  //scale(s); 
  ellipse(x+500, y+50, 85, 85);

  //scale(s); 
  ellipse(x+500, y-100, 30, 30);

  //scale(s); 
  ellipse(x+560, y-80, 70, 70);

  //scale(s); 
  ellipse(x+700, y+30, 50, 50);

  //scale(s); 
  ellipse(x+770, y-80, 100, 100);

  noStroke();
  fill(0);
  text("spring", 400, 150); 
  textFont("Grouch");
  textSize(50);

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

  
}

function mousePressed() {
  if (link == true) {
    window.open( "spring.html", "_blank");
  }
}