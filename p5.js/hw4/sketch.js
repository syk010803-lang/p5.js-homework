let x = 300;
let y = 200;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(255, 250, 240);

  let moveY = sin(frameCount * 0.05) * 10;

  fill(0);
  rect(x - 90, y - 60 + moveY, 180, 250, 30); 
  
  fill(100, 180, 255 + sin(frameCount * 0.1) * 50);
  arc(x, y + 130 + moveY, 200, 150, PI, 0); 
  
  fill(255, 235, 225);
  ellipse(x, y + moveY, 150, 190); 

  fill(0);
  ellipse(x - 85, y + 80 + moveY, 60, 200); 
  ellipse(x + 85, y + 80 + moveY, 60, 200); 

  fill(0);
  arc(x, y - 50 + moveY, 160, 120, PI, 0);

  let eyeSize = 12 + sin(frameCount * 0.2) * 4;
  fill(0);
  circle(x - 35, y + moveY, eyeSize); 
  circle(x + 35, y + moveY, eyeSize); 

  noFill();
  stroke(200, 100, 100);
  strokeWeight(3);
  arc(x, y + 45 + moveY, 40, 20, 0, PI);
  noStroke();

  fill(255, 150, 150, 100);
  ellipse(x - 50, y + 20 + moveY, 30, 20);
  ellipse(x + 50, y + 20 + moveY, 30, 20);

  if (frameCount == 600) {
    saveGif('my_face', 10);
  }
}