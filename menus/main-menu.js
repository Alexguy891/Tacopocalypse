 // Declare variables
let gameState = "menu";
let menuImg;
let optionsButton;

function preload() {
  // Load the menu image
  if(gameState === "menu") {
  menuImg = createImg('main_menu_borderless.png');
  }
}

function setup() {
  // Create the canvas
  createCanvas(900, 900);
  
  // Create the options menu button
  optionsButton = createButton('');
  optionsButton.position(width - 50, 10);
  optionsButton.size(40, 40);
  optionsButton.style('background-image', 'settings_img.png');
  optionsButton.mousePressed(goToOptions);
}

function draw() {
  // Draw the menu image
  if(gameState === "menu") {
  background(220);
  image(menuImg, 0, 0, width, height); 
  } else if (gameState === "game") { goToGame(); } 
    else if (gameState === "options") { goToOptions(); }
}

function keyPressed() {
  // Start the game when the spacebar is pressed
  if(gameState === "menu") {
  if (keyCode === 32) {
    gameState = "game";
    }
  }
}

function goToGame() {
   background(50);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Game in progress...", width/2, height/2);
}

function goToOptions() {
  // Go to the options menu
  console.log('Going to Options');
  gameState = "options";
  background(150);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Options menu", width/2, height/2);
    text('Right click to return to menu', 265, 385)
}

function mousePressed() {
  if (mouseButton === RIGHT) { // Handle right-clicks
    if (gameState === "options") {
      gameState = "menu"; // Return to menu
    }
  }
}