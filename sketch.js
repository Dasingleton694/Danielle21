//The setup function only happens once
var ice= 0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(255, 51, 237); //an RGB color for the canvas' background
  //circle
  stroke(58, 51, 255); // an RGB color for the circle's border
  strokeWeight(7);
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(100,100,ice,ice); // center of canvas, 20px dia

  
  fill(51, 255, 123);
  rect(225,400,50,50);
  stroke(233,70,18);
  line(ice,200,400,ice);
  strokeWeight(0);
  triangle(300,110,230,50,175,200);
  strokeWeight(4);
  fill(255, 51, ice);
  textSize(90);
  textFont("Helvetica");
  text('Happy Day',22,300);
}

function mousePressed () {

if (ice>= 230 ) {
ice=0;
} else {
ice=ice+5; 
}





}

