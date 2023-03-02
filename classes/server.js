// define images
let tacoShellImg, tacoMeatImg, tomatoImg, cheeseImg, hotSauceImg;
let canvasX = 500, canvasY = 500;
let interactableArray = [];

class Ingredient {
  
  constructor (name, cookingTime, image) {
    this.name = name;
    this.cookingTime = cookingTime;
    this.cooked = false;
    this.x=50;
    this.y=50;
    
    this.image = image;
  }
  display() {
    image(this.image, this.x, this.y);
  }
}

// define starting positions of images
const startPositions = [
  { image: 'tacoShellImg', x: 10, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 },
  { image: 'tacoMeatImg', x: 60, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: 3 },
  { image: 'tomatoImg', x: 110, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 },
  { image: 'cheeseImg', x: 160, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 },
  { image: 'hotSauceImg', x: 210, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 }
];

// define target area for each type of ingredient
const targetAreas = [
  { image: 'tacoShellImg', x: 300, y: 10 },
  { image: 'tacoMeatImg', x: 300, y: 80 },
  { image: 'tomatoImg', x: 300, y: 150 },
  { image: 'cheeseImg', x: 300, y: 220 },
  { image: 'hotSauceImg', x: 300, y: 290 }
];

// set up event listeners
let dragOffsetX = 0;
let dragOffsetY = 0;
let clickedObject = null;
let clickedSourceObject = null;

function preload() {

  // load images
  // TODO: load images here
}

function setup() {
  // create canvas
  createCanvas(canvasX, canvasY);
  textSize(width / 50);
  background(220);
  
//   let tacoShellImg = myLoadImage();
  
//   tacoShell = new Ingredient("Taco Shell", 0, tacoShellImg);
//   interactableArray.push(tacoShell);
}

function draw() {
  resetCanvas();
  // draw starting images
  // TODO: draw starting images here
  drawSources();
  displayObjects();
  // draw target areas
  // TODO: draw target areas here

  // draw dragged image
  // TODO: draw dragged image here
}

function mousePressed() {
  console.log("Mouse click");
  // check if mouse is in start area
  findObject(mouseX, mouseY);
  if(clickedObject != null) {
    console.log("Mouse click on object: " + clickedObject);
  }
  else {
    let index = findSourcePosition(mouseX, mouseY);
    if (clickedSourceObject != null) {
      console.log("Mouse click on source: " + clickedSourceObject);
      newImage = myLoadImage();
      newObject = new clickedSourceObject.ingredient(clickedSourceObject.image, clickedSourceObject.cookingTime, newImage);
      newObject.x = targetAreas[index].x;
      newObject.y = targetAreas[index].y;
      interactableArray.push(newObject);
    }
  }
}

function myLoadImage() {
  
  let tacoShellImg = createImage(50, 50); // same as new p5.Image(100, 100);
  tacoShellImg.loadPixels();
  let x, y;
  // fill with random colors
  for (y = 0; y < tacoShellImg.height; y++) {
    for (x = 0; x < tacoShellImg.width; x++) {
      let red = random(255);
      let green = random(255);
      let blue = random(255);
      let alpha = 255;
      writeColor(tacoShellImg, x, y, red, green, blue, alpha);
    }
  }
  tacoShellImg.updatePixels();
  return tacoShellImg;
}

// function mouseReleased() {
//   if (isDragging && dragImage) {
//     // check if mouse is in target area
//     // TODO: check if mouse is in target area here

//     if (isDragging) {
//       // image is not dropped in target area, reset to starting position
//       // TODO: reset image to starting position here
//     }
//   }
// }

// helper for writing color to array
function writeColor(image, x, y, red, green, blue, alpha) {
  let index = (x + y * image.width) * 4;
  image.pixels[index] = red;
  image.pixels[index + 1] = green;
  image.pixels[index + 2] = blue;
  image.pixels[index + 3] = alpha;
}

function findObject(x, y) {
  clickedObject = null;
  interactableArray.forEach(it => {
    if(it.x < x && it.y <y && it.image.width + it.x > x && it.image.height + it.y > y) {
      clickedObject = it;
      return;
    }
  });
}
 
// function findSourcePosition(x, y) {
//   clickedSourceObject = null;
//   startPositions.forEach(it => {
//     if(it.x < x && it.y <y && it.width + it.x > x && it.height + it.y > y) {
//       clickedSourceObject = it;
//       return;
//     }
//   });
// }

function findSourcePosition(x, y) {
  clickedSourceObject = null;
  for(i = 0; i < startPositions.length; i++) {
    if(startPositions[i].x < x && startPositions[i].y <y && startPositions[i].width + startPositions[i].x > x && startPositions[i].height + startPositions[i].y > y){
      clickedSourceObject = startPositions[i];
      return i;
    }
  }
  return -1;
}

function drawSources() {
  startPositions.forEach(it => {
    rect(it.x, it.y, it.width, it.height);
  });
}

function displayObjects() {
  interactableArray.forEach(it => {
    it.display();
  });
}

function mouseDragged() {
  // redraw canvas with dragged image
  // TODO: redraw canvas with dragged image here
  if(clickedObject != null) {
    if(mouseX > 0 && mouseX < width) {
      clickedObject.x = mouseX - (clickedObject.image.width / 2);
    }
    if(mouseY > 0 && mouseY < height) {
      clickedObject.y = mouseY - (clickedObject.image.height / 2);
    }
  }
}

function resetCanvas() {
  background(220);
}

class MovableIngredient extends Ingredient {
  
  constructor (name, cookingTime, image) {
    this.name = name;
    this.cookingTime = cookingTime;
    this.cooked = false;
    this.x=50;
    this.y=50;
    
    this.image = image;
  }
  display() {
    image(this.image, this.x, this.y);
  }
}

// handle button click to reset canvas
// TODO: handle button click to reset canvas here