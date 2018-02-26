var x = [];
var y = [];
// var xSpeed = [];
// var ySpeed = [];
var r = 0;
var smoke = [];

function setup() {
  createCanvas(400, 400);
 for (var i = 0; i < 100; i++) {
  x[i] = random(180,210);
  y[i] = random(0,300);
  r[i] = 0;
  // xSpeed[i] = random(0.2);
  // ySpeed[i] = random(1,3);
	 var smoke = 50;
  
 }
}

function draw() {
  background(0);
  noStroke();
  
  fill(255);
  rect(195, height, 30, -100);

  
  for (var i = 0; i < 100; i++) {
  push();
  fill(y[i]);
  translate(x[i],y[i]);
  rotate(r[i]);
  rect(10, 10, 10, 10);
  pop();
  // x[i] += xSpeed[i];
  y[i] -= 2;
  
  r[i] += 0.03
  
  if (y[i] < -150) {
    y[i] = 290;
  }
}
}
