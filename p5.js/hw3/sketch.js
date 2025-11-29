let charX = 300;
let charY = 200;

let shirtR = 173;
let shirtG = 216;
let shirtB = 230;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(220);

  if (keyIsDown(LEFT_ARROW)) {
    charX = charX - 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    charX = charX + 3;
  }
  if (keyIsDown(UP_ARROW)) {
    charY = charY - 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    charY = charY + 3;
  }

  if (keyIsPressed && key == 'c') {
    shirtR = random(255);
    shirtG = random(255);
    shirtB = random(255);
  }

  fill(shirtR, shirtG, shirtB);
  rect(charX - 150, charY + 120, 300, 200);

  stroke(0);
  strokeWeight(2);
  line(charX, charY + 120, charX - 70, charY + 140);
  line(charX, charY + 120, charX + 70, charY + 140);
  
  noStroke();
  fill(0);
  circle(charX, charY + 160, 6);
  circle(charX, charY + 180, 6);

  fill(255, 228, 196);
  ellipse(charX, charY + 50, 220, 240);

  if (mouseIsPressed) {
    fill(255, 100, 100);
    ellipse(charX, charY + 110, 40, 60); 
  } else {
    fill(255, 192, 203);
    stroke(0);
    strokeWeight(1);
    arc(charX, charY + 110, 80, 25, 0, PI);
    noStroke();
  }

  stroke(0);
  line(charX, charY + 30, charX, charY + 60);
  noFill();
  arc(charX, charY + 60, 20, 10, 0, PI);
  noStroke();

  fill(255);
  ellipse(charX - 50, charY + 25, 50, 25);
  ellipse(charX + 50, charY + 25, 50, 25);

  let eyeOffsetX = (mouseX - width / 2) / 20;
  let eyeOffsetY = (mouseY - height / 2) / 20;

  fill(80, 40, 0);
  circle(charX - 50 + eyeOffsetX, charY + 25 + eyeOffsetY, 18);
  circle(charX + 50 + eyeOffsetX, charY + 25 + eyeOffsetY, 18);

  fill(20);
  arc(charX, charY - 50, 300, 220, PI, 0);
  rect(charX - 150, charY - 50, 300, 50);
  
  stroke(0);
  strokeWeight(2);
  line(charX, charY - 130, charX, charY - 30);
  noStroke();

  fill(20);
  ellipse(charX - 130, charY + 100, 90, 300); 
  ellipse(charX + 130, charY + 100, 90, 300); 

  fill(255, 255, 0);
  circle(charX - 110, charY + 80, 12);

  if (frameCount == 600) {
    // saveGif('my_interactive_art', 10);
  }
}
