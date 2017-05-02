// Drawing 2
var mx = 0;
var my = 0;
var pxd;
var pxWidth;
var pxHeight;
var link;
var img;
var vid;
var edge = 200;
var radius = 15;
var easing = 1;
var inner = edge + radius;
var f;

// Coordinates of label
var ly;
var speed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  f = loadFont("../styles/Grouch.ttf", 32);

  ellipseMode(RADIUS);
  rectMode(CORNERS);

  frameRate(30);

  // Video
  vid = createVideo('../media/snow.mp4');
  vid.loop();
  vid.hide();
  vid.volume(0);

  // Initial positions for labels
  ly = 600;
  speed = 3;
}

function draw() {
  stroke(255);

  rectMode(CORNER);
  noStroke();

  fill(236,227,217);
  image(vid, 0, 0, window.innerWidth, window.innerHeight);
  filter(THRESHOLD);

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
  fill(255);
  rect(edge, edge, width-edge-200, height-edge-200);

  // Snowball
  fill(0);  
  ellipse(mx, my, radius, radius);

  noStroke();
  fill(0);
  textSize(50);
  textFont(f);
  text("winter", window.innerWidth/2-100, window.innerHeight/2); 
  textFont("Grouch");
 
   // Label
  rect(0, ly, 370, 30);

  // Increment the value of x
  ly += speed;

  // Constraints
  if ((ly > height - 50) || (ly < 300)) {
     speed = speed * -1;
  }

  fill(0);
  textSize(10);
  textFont(f);
  fill(255);
  text("How Long Will I Love You - Ellie Goulding x Henry Krinkle", 0, ly + 20);
}

function mousePressed() {
  if (link == true) {
    window.open( "winter.html", "_blank");
  }
}
