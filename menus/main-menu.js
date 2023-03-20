let menuItems = ["Start Game", "Options", "Exit"]; // Define menu items
let selectedItem = -1; // -1 indicates no item is selected
let gameState = "menu"; // Set initial game state to "menu"
let mouseOverButton = -1; // -1 indicates mouse is not over any button

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textAlign(CENTER);
  textSize(30);
  
   fill(255, 0, 0);
  text("TACOPOCALYPSE", width/2, height/4);
  
  if (gameState === "menu") { // Draw menu
    // Draw menu items
    for (let i = 0; i < menuItems.length; i++) {
      if (i === selectedItem || i === mouseOverButton) {
        fill(255, 0, 0); // Highlight selected or hovered item
      } else {
        fill(0);
      }
      text(menuItems[i], width/2, height/2 + i * 40);
    }
    
    // Update mouseOverButton based on mouse position
    mouseOverButton = -1;
    for (let i = 0; i < menuItems.length; i++) {
      if (mouseX > width/2 - textWidth(menuItems[i])/2 && 
          mouseX < width/2 + textWidth(menuItems[i])/2 &&
          mouseY > height/2 + i * 40 - 30 &&
          mouseY < height/2 + i * 40 + 10) {
        mouseOverButton = i;
        break;
      }
    }
  } else if (gameState === "game") { // Draw game
    // Draw game elements here
    background(50);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Game in progress...", width/2, height/2);
  } else if (gameState === "options") { // Draw options
    // Draw options elements here
    background(150);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Options menu", width/2, height/2);
  }
}

function mouseClicked() {
  if (gameState === "menu") { // Handle menu clicks
    for (let i = 0; i < menuItems.length; i++) {
      if (mouseX > width/2 - textWidth(menuItems[i])/2 && 
          mouseX < width/2 + textWidth(menuItems[i])/2 &&
          mouseY > height/2 + i * 40 - 30 &&
          mouseY < height/2 + i * 40 + 10) {
        
        // Perform action based on selected item
        switch (i) {
          case 0: // Start Game
            gameState = "game"; // Set game state to "game"
            break;
          case 1: // Options
            gameState = "options"; // Set game state to "options"
            break;
          case 2: // Exit
            window.close(); // Close the window
            break;
          default:
            break;
        }
      }
    }
  } else if (gameState === "game") { // Handle game clicks
    // Handle game clicks here
  } else if (gameState === "options") { // Handle options clicks
    // Handle options clicks here
  }
}


function mousePressed() {
  if (mouseButton === RIGHT) { // Handle right-clicks
    if (gameState === "game" || gameState === "options") {
      gameState = "menu"; // Return to menu
    }
  }
}