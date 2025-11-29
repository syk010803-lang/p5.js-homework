let x = 300;
let y = 200;

function setup() {
  createCanvas(600, 400);
  noStroke();
  noLoop();
}

function draw() {
  background(220);

  fill(173, 216, 230);
  rect(150, 320, 300, 200);

  stroke(0);
  strokeWeight(2);
  line(300, 320, 230, 340);
  line(300, 320, 370, 340);
  
  noStroke();
  fill(0);
  circle(300, 360, 6);
  circle(300, 380, 6);

  fill(255, 228, 196);
  ellipse(x, 250, 220, 240);

  fill(255, 192, 203);
  stroke(0);
  strokeWeight(1);
  arc(x, 310, 80, 25, 0, PI);
  noStroke();

  stroke(0);
  line(x, 230, x, 260);
  noFill();
  arc(x, 260, 20, 10, 0, PI);
  noStroke();

  fill(255);
  ellipse(250, 225, 50, 25);
  ellipse(350, 225, 50, 25);

  fill(80, 40, 0);
  circle(250, 225, 18);
  circle(350, 225, 18);

  fill(20);
  arc(x, 150, 300, 220, PI, 0);
  rect(150, 150, 300, 50);
  
  stroke(0);
  strokeWeight(2);
  line(x, 60, x, 140);
  noStroke();

  fill(20);
  ellipse(170, 300, 90, 300); 
  ellipse(430, 300, 90, 300); 

  fill(255, 255, 0);
  circle(190, 280, 10);
}

function mousePressed() {
  saveCanvas('my_face', 'png');
}