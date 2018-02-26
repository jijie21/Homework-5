var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
var ballcolors = [];
var d = 0;

function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < 50; i = i + 1) {
    x[i] = width / 2;
    y[i] = height / 2;
    xSpeed[i] = random(-6, 6);
    ySpeed[i] = random(-6, 6);
    ballcolors[i] = color(random(255), random(255), random(255))
  }
}

function draw() {
  background(0);
  noStroke();

  for (var i = 0; i < 50; i = i + 1) {
    fill(ballcolors[i]);
    ellipse(x[i], y[i], d);
    x[i] = x[i] + xSpeed[i];
    y[i] = y[i] + ySpeed[i];

    if (random() <0.01){
      d = random (30, 70)
    }
    
    if (x[i] > width) {
      xSpeed[i] = -xSpeed[i];
    }

    if (y[i] > height) {
      ySpeed[i] = -ySpeed[i];
    }

    if (x[i] < 5) {
      xSpeed[i] = -xSpeed[i];
    }

    if (y[i] < 5) {
      ySpeed[i] = -ySpeed[i];
    }
  }
}
