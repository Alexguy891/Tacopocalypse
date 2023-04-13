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

class TacoOrder {
    constructor (posX, posY, tacoSprite) {
        //the x and y position of our taco image
        this.posX = posX;
        this.posY = posY;

        //the taco image to be displayed
        this.tacoSprite = tacoSprite;

        //the order to be checked against when completeing
        //this.actualOrder = actualOrder;
    }

    getPosX() { //returns x position of order
        return this.posX;
    }
    getPosY() { //returns y position of order
        return this.posY;
    }

    show() { //draws the taco
        image(this.tacoSprite, this.posX, this.posY);
    }

    /*getActualOrder() { //returns order to be checked
        return this.actualOrder;
    }*/
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