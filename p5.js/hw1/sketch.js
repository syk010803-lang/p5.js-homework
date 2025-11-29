let x = 300;
let y = 200;

function setup() {
  createCanvas(600, 400);
  noStroke();
  noLoop();
}

function draw() {
  background(255, 250, 240);

  fill(0);
  rect(x - 90, y - 60, 180, 250, 30); 
  
  fill(100, 180, 255);
  arc(x, y + 130, 200, 150, PI, 0); 
  
  fill(255, 235, 225);
  ellipse(x, y, 150, 190); 

  fill(0);
  ellipse(x - 85, y + 80, 60, 200); 
  ellipse(x + 85, y + 80, 60, 200); 

  fill(0);
  arc(x, y - 50, 160, 120, PI, 0);

  fill(0);
  circle(x - 35, y, 12); 
  circle(x + 35, y, 12); 

  noFill();
  stroke(200, 100, 100);
  strokeWeight(3);
  arc(x, y + 45, 40, 20, 0, PI);
  noStroke();

  fill(255, 150, 150, 100);
  ellipse(x - 50, y + 20, 30, 20);
  ellipse(x + 50, y + 20, 30, 20);
}

function mousePressed() {
  saveCanvas('my_face', 'png');
}