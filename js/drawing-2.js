// Drawing 2
var pxd;
var pxWidth;
var pxHeight;

function setup() {
  createCanvas(1000, 300);
  // abstractvid = createVideo('summer.mp4');
  // pxd = pixelDensity();
  // pxWidth = width * pxd;
  // pxHeight = height * pxd;
  // abstractvid.loop(); 
  // abstractvid.hide(); 
}

function draw() {
  background(150);
  loadPixels();

  // for (var y = 0; y < pxHeight; y++) {
  //   for (var x = 0; x < pxWidth; x++) { 
  //     var index = (x + y * pxWidth) * 4; 
  //     pixels[index] = 0; 
  //     pixels[index + 3] = 200; 
  //   }
  // }

  updatePixels();
  //blendMode(EXCLUSION);
  image(abstractvid, 50, 50, 300, 450);

 //   if ((mouseX >= 50 && mouseX <= 550) && (mouseY >= 50 && mouseY <= 400)) {
 //    text("by Sean Crossland", 90, 150); 
 //    textSize(50);
	// fill(255);
  // }
}