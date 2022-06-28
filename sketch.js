let alfa = 10;
let beta = 28;
let sigma = 8 / 3;

let x = 0.01;
let y = 0;
let z = 0;

let dx;
let dy;
let dz;
let dt = 0.01;

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  orbitControl();

  scale(5);
  noFill();
  colorMode(HSB);

  dx = alfa * (y - x) * dt;
  x += dx;

  dy = (x * (beta - z) - y) * dt;
  y += dy;

  dz = (x * y - sigma * z) * dt;
  z += dz;

  points.push(new Vector(x, y, z));
  let hu = 0;
  beginShape();
  points.forEach((vector) => {
    stroke(hu, 255, 255);
    vertex(vector.x, vector.y, vector.z);
    hu += 0.1;
    if (hu > 255) hu = 0;
  });
  endShape();
}
