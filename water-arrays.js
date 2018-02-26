var positionX = [];
var positionY = [];
var size = [];
var velocity = [];

function setup() {
	createCanvas(400, 400);
	colorMode(HSB);

	for (var i = 0; i < 5; i++) {
		positionX[i] = random(width / 2, width / 1.5);
		positionY[i] = random(height / 2, height);
		size[i] = random(10, 20);
		velocity[i] = random(2, 5);

	}
}

function draw() {
	background(0);
	noStroke();

	// draw pipe
	rect(0, 200, 230, 20);

	// draw drip
	for (var i = 0; i < 10; i++) {
		ellipse(positionX[i], positionY[i], size[i]);
		positionY[i] += velocity[i];
	}


	for (var i = 0; i < 10; i++) {
		if (positionY[i] > height) {
			// reset
			positionY[i] = 220;
		}
	}

}
