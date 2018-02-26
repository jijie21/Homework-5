var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
var r = 0;

function setup() {
  createCanvas(400, 400);

 for (var i = 0; i < 100; i = i + 1) {
  x[i] = 190;
  y[i] = random(0,100);
  r[i] = 0;
  xSpeed[i] = random(0.2);
  ySpeed[i] = random(1,3);
  
 }
}

function draw() {
  background(0);
  noStroke();
  
  fill(255);
  rect(195, height, 30, -100);

  
  for (var i = 0; i < 100; i = i + 1) {
  push();
  fill(y[i]);
  translate(x[i],y[i]);
  rotate(r[i]);
  rect(-10, -10, 20, 20);
  pop();
  x[i] += xSpeed[i];
  y[i] -= ySpeed[i];
  
  r[i] += 0.05
  
  if (y[i] < -150) {
    y[i] = 290;
  }
}
}
