// Drawing 2
var mx = 0;
var my = 0;
var pxd;
var pxWidth;
var pxHeight;
var link;
var img;
var edge = 60;
var radius = 15;
var easing = 0.09;
var inner = edge + radius;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //img = loadImage("../media/ekg.gif"); // Photo credit goes to http://www.12leadecg.com/full/ecgindex.aspx?id=13
  ellipseMode(RADIUS);
  rectMode(CORNERS);
}

function draw() {
  stroke(255);

  rectMode(CORNER);
  noStroke();

  fill(236,227,217);
  rect(0, 0, window.innerWidth, window.innerHeight);

  //  Snowball follows cursor
  //  Inspired by https://processing.org/examples/
  if (abs(mouseX - mx) > 0.1)
    mx = mx + (mouseX - mx) * easing;
  if (abs(mouseY - my) > 0.1)
    my = my + (mouseY- my) * easing;
  
  // Constraints
  mx = constrain(mx, inner, width - inner);
  my = constrain(my, inner, height - inner);

  // Box
  fill(70);
  rect(edge, edge, width-edge-60, height-edge-60);

  // Snowball
  fill(255);  
  ellipse(mx, my, radius, radius);

  // Checks whether "link" is clicked
  if ((mouseX >= 400 && mouseX <= 600) && (mouseY >= 100 && mouseY <= 150)) {
    cursor(HAND);
    link = true;
  } else {
    cursor(ARROW);
    link = false;
  }

  noStroke();
  fill(255);
  text("winter", window.innerWidth/2-100, window.innerHeight/2); 
  textFont("Grouch");
  textSize(50);

  // image(img, 0, 0);    EKG
  // image(img, 710, 0);
}

function mousePressed() {
  if (link == true) {
    window.open( "winter.html", "_blank");
  }
}
