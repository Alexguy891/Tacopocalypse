let difficultyButton, volumeSlider;
let volumeValue = 0.5; // Default volume value
let difficultyLevel = 1; // Default difficulty level

function setup() {
  createCanvas(400, 400);

  // Create difficulty button
  difficultyButton = createButton('Difficulty');
  difficultyButton.position(width/2 - 60, height/2 - 65);
  difficultyButton.size(120, 50);
  difficultyButton.mousePressed(changeDifficulty);

  // Create volume slider
  volumeSlider = createSlider(0, 1, volumeValue, 0.01);
  volumeSlider.position(width/2 - 75, height/2 + 20);
  volumeSlider.style('width', '150px');
}

function draw() {
  background(220);
  // Draw settings menu title
  textSize(45);
  textAlign(CENTER, TOP);
  text('Settings', width/2, 70);

  // Draw volume slider label
  textSize(19);
  textAlign(CENTER, TOP);
  text('Volume', width/2 , height/2 - 2);

  // Draw current difficulty level
  textSize(24);
  textAlign(CENTER, CENTER);
  text('Difficulty Level: ' + difficultyLevel, width/2, height/2 + 60);
}

function changeDifficulty() {
  // Do something when difficulty button is clicked
  if(difficultyLevel == 1) {
    difficultyLevel = 2;
  } else {
    difficultyLevel = 1;
  }
}

function mouseReleased() {
  // Update volume value when mouse is released on volume slider
  if(mouseX >= volumeSlider.position().x && mouseX <= volumeSlider.position().x + volumeSlider.width &&
    mouseY >= volumeSlider.position().y && mouseY <= volumeSlider.position().y + volumeSlider.height) {
      volumeValue = volumeSlider.value();
    }
}