// Where is the circle
let x, y, a, b, c, d, rx, ra, rc;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width;
  y = height/2;
  a = width;
  b = height/4;
  c = width;
  d = height/1.5;
  rx = random(2);
  ra = random(2);
  rc = random(5);
}

function draw() {
  background(200);

  // Draw a circle
  stroke(50);
  fill(100);
  rect(x, y, 120, 40);
  rect(a, b, 120, 40);
  rect(c, d, 120, 40);

  // Jiggling randomly on the horizontal axis
  y = y;
  b = b;
  d = d;
  // Moving up at a constant speed
  x = x - rx;
  a = a - ra;
  c = c - rc;

  // Reset to the bottom
  if (x < -120) {
    rx = random(5);
    x = width;
  }
  if (a < -120) {
    ra = random(5);
    a = width;
  }
  if (c < -120) {
    rc = random(5);
    c = width;
  }
}