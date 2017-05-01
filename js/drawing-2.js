// Drawing 2
var pxd;
var pxWidth;
var pxHeight;
var link;
var img;

function setup() {
  createCanvas(1000, 300);
  img = loadImage("../media/ekg.gif"); // Photo credit goes to http://www.12leadecg.com/full/ecgindex.aspx?id=13
}

function draw() {
  rectMode(CORNER);
  noStroke();

  fill(236,227,217);
  stroke(30);
  rect(10, 10, 980, 280);

  // Checks whether "link" is clicked
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

  image(img, 0, 0);
  image(img, 710, 0);
}

function mousePressed() {
  if (link == true) {
    window.open( "winter.html", "_blank");
  }
}
