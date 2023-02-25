let circleX = 200;  //initial x value of circle
let circleY = 200;  //initial y value of circle
let totalScore = 0; //initial player score

function setup() {
  createCanvas(400, 400);
}

function generateCoord() {
  return random(25, width - 25);  // generate random X or Y coordinate between 25 and width/height - 25
}

function increaseScore() {
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < 25) {  //if the mouse is inside the circle
    ++totalScore;  //increment the score
    circleX = generateCoord();  //get new coordinates for the circle
    circleY = generateCoord();  //get new coordinates for the circle
  }
  return totalScore;  //return score to be printed for the text
}

function updateScore() {  //prints the current score
  let score = 'Score: ';
  let scoreNum = increaseScore();
  score += str(scoreNum);
  return score;
}

function draw() {
  background(220);
  textSize(20);
  text(updateScore(), 10, 25);
  ellipse(circleX, circleY, 50, 50);
  fill('green');
}