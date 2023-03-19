class Ingredient extends Entity {
  constructor (posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, name, cookingTime) {
      super(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, false, true);

      // ingredient name
      this.name = name;

      // time to cook
      this.cookingTime = cookingTime;

      // for cooked checking
      this.cooked = false;

      // for dragging
      this.isDragged = false;
      this.mouseOffsetX = 0;
      this.mouseOffsetY = 0;
  }

  // displays ingredient
  show() {
    image(this.spriteImage, this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);
  }

  // check if ingredient clicked
  clicked() {
      // check if clicked
      if (mouseX > this.positionArray[0] && mouseX < this.positionArray[0] + this.collisionArray[1] 
          && mouseY > this.positionArray[1] && mouseY < this.positionArray[1] + this.collisionArray[0]) {
          this.isDragged = true;

          // track dragging coords
          this.mouseOffsetX = this.positionArray[0] - mouseX;
          this.mouseOffsetY = this.positionArray[1] - mouseY;
      }
  }

  // reset drag variable after release
  release() {
      this.isDragged = false;
  }

  // update position when dragged
  update() {
      if(this.isDragged) {
          this.positionArray[0] = mouseX + this.mouseOffsetX;
          this.positionArray[1] = mouseY + this.mouseOffsetY;
      }
  }
}


let customerOrders = []; //array for storing all customer orders
let orderIndex = 0; //for indexing orders
let ingredients = ['Lettuce', 'Cheese', 'Tomato', "Sour Cream"]; // List of possible added ingredients to an order

class Customer //customer class for assigning an order to a customer
{//class should not extend entity imo -jack h
  constructor(order)
  {
    this.order = order;
  }
  getOrder() {
    return this.order;
  }
}

function generateOrder()
{
  //background(220); //used for removing old order text
  
  shuffle(ingredients, true); // Shuffle the order of ingredients in array to allow for proper randomization
  
  let order = [];
  order[0] = 'Shell'; order[1] = 'Beef'; // Every order must at minimum have a shell and beef
  
  for(let i = 0; i < random(0,4); i++) {
      order[i + 2] = ingredients[i];
  }
  customerOrders[orderIndex] = new Customer(order); //adds this order into our order array
  orderIndex++; //increments to next spot in order array
}//TODO: swap orderIndex system for customerOrder.push(order)

// define images
// let tacoShellImg, tacoMeatImg, tomatoImg, cheeseImg, hotSauceImg;
// let canvasX = 500, canvasY = 500;
// let interactableArray = [];

// define starting positions of images
// const startPositions = [
//   { image: 'tacoShellImg', x: 10, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 },
//   { image: 'tacoMeatImg', x: 60, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: 3 },
//   { image: 'tomatoImg', x: 110, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 },
//   { image: 'cheeseImg', x: 160, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 },
//   { image: 'hotSauceImg', x: 210, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 }
// ];

// // define target area for each type of ingredient
// const targetAreas = [
//   { image: 'tacoShellImg', x: 300, y: 10 },
//   { image: 'tacoMeatImg', x: 300, y: 80 },
//   { image: 'tomatoImg', x: 300, y: 150 },
//   { image: 'cheeseImg', x: 300, y: 220 },
//   { image: 'hotSauceImg', x: 300, y: 290 }
// ];
