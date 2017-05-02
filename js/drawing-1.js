// Drawing 1
var rectX, rectY;
var rectOver = false; 
var rectColor = 0;
var link;
var f;

// Paper shapes
var p1;
var p2; 
var p3;

// Coordinates + dimensions of papers
var p1x, p1y, p1w, p1h;
var p2x, p2y, p2w, p2h;
var p3x, p3y, p32, p3h;

// Coordinates + dimensions of tapes
var t1x, t1y, t1w, t1h;
var t2x, t2y, t2w, t2h;
var t3x, t3y, t3w, t3h;

// Offsets from interaction
var xOffset, yOffset;
var txOffset, tyOffset;

// Tracks which paper and tape is being 
// interacted with
var currPaper, currTape;
var overPaper = false;
var locked = false;

function setup() {
  createCanvas(1000, 300);
  f = loadFont("../styles/Grouch.ttf", 32);

  // Initial positions + dimensions for papers
  p1x = 40;
  p1y = 40;
  p1w = 110;
  p1h = 170;

  p2x = 190;
  p2y = 90;
  p2w = 150;
  p2h = 100;

  p3x = 190;
  p3y = 210;
  p3w = 70;
  p3h = 80;

  // Initial positions for tapes
  t1x = 55;
  t1y = 35;
  t1w = 80;
  t1h = 10;

  t2x = 205;
  t2y = 85;
  t2w = 120;
  t2h = 10;

  t3x = 205;
  t3y = 205;
  t3w = 40;
  t3h = 10;
}

function draw() {

	stroke(220);

  rectMode(CORNER);
  noStroke();

  fill(236,227,217);
  stroke(30);
  rect(10, 10, 980, 280);

  // Checks whether "link" is clicked
  if ((mouseX >= 450 && mouseX <= 560) && (mouseY >= 100 && mouseY <= 150)) {
    cursor(HAND);
    link = true;
  } else {
    cursor(ARROW);
    link = false;
  }

  // Checks whether paper is dragged
  if ((mouseX > p1x && mouseX < p1x + p1w && mouseY > p1y && mouseY < p1y + p1h)) {
    cursor(HAND);
    currPaper = "p1";
    currTape = "t1";
    overPaper = true;
    if (!locked) {
      stroke(0);
      fill(255);
    }
  }
  else if ((mouseX > p2x && mouseX < p2x + p2w && mouseY > p2y && mouseY < p2y + p2h)) {
    cursor(HAND);
    currPaper = "p2";
    currTape = "t2";
    overPaper = true;
    if (!locked) {
      stroke(0);
      fill(255);
    }
  }
  else if ((mouseX > p3x && mouseX < p3x + p3w && mouseY > p3y && mouseY < p3y + p3h)) {
    cursor(HAND);
    currPaper = "p3";
    currTape = "t3";
    overPaper = true;
    if (!locked) {
      stroke(0);
      fill(255);
    }
  }
  else {
    overPaper = false;
    noStroke();
    fill(255);
  }

  // Papers - L to R
  fill(255);
  noStroke();

  rect(p1x, p1y, p1w, p1h);
  rect(p2x, p2y, p2w, p2h);
  rect(p3x, p3y, p3w, p3h);

  // Tape - L to R
  fill(0);

  rect(t1x, t1y, t1w, t1h);
  rect(t2x, t2y, t2w, t2h);
  rect(t3x, t3y, t3w, t3h);

  fill(0);
  textFont(f);
  textSize(50);
  text("fall", 450, 150); 
}

function mousePressed() {
  if (link == true) {
    window.open( "fall.html", "_blank");
  }

  if (overPaper) {
    locked = true;
    fill(255);
  }
  else {
    locked = false;
  }

  if (currPaper == "p1") {
    xOffset = mouseX - p1x;
    yOffset = mouseY - p1y;

    txOffset = mouseX - t1x;
    tyOffset = mouseY - t1y;
  }
  else if (currPaper == "p2") {
    xOffset = mouseX - p2x;
    yOffset = mouseY - p2y;

    txOffset = mouseX - t2x;
    tyOffset = mouseY - t2y;
  }
  else if (currPaper == "p3") {
    xOffset = mouseX - p3x;
    yOffset = mouseY - p3y;

    txOffset = mouseX - t3x;
    tyOffset = mouseY - t3y;
  }
}

function mouseDragged() {
  if (locked && currPaper == "p1") {
    p1x = mouseX - xOffset;
    p1y = mouseY - yOffset;
    t1x = mouseX - txOffset;
    t1y = mouseY - tyOffset;
  }
  else if (locked && currPaper == "p2") {
    p2x = mouseX - xOffset;
    p2y = mouseY - yOffset;
    t2x = mouseX - txOffset;
    t2y = mouseY - tyOffset;
  }
  else if (locked && currPaper == "p3") {
    p3x = mouseX - xOffset;
    p3y = mouseY - yOffset;
    t3x = mouseX - txOffset;
    t3y = mouseY - tyOffset;
  }
}

function mouseReleased() {
  locked = false;
}