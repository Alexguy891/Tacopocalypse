class Ingredient extends Entity {
  constructor (posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, hasCollision, isMovable, name, cookingTime) {
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
      image(this.image, this.x, this.y);
  }

  // check if ingredient clicked
  clicked() {
      // check if clicked
      if (mouseX > this.positionArray[0] && mouseX < this.positionArray[0] + this.collisionArray[1] 
          && mouseY > this.positionArray[1] && mouseY < this.positionArray[1] + this.collisionArray[0]) {
          this.isDragged = true;

          // track dragging coords
          this.mouseOffsetX = this.x - mouseX;
          this.mouseOffsetY = this.y - mouseY;
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