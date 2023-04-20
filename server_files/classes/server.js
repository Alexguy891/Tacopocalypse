class Ingredient extends Entity {
  constructor (posX, posY, spritePath, name) {
    super(posX, posY, 100, 100, 100, 100, spritePath, false, true);

    // ingredient name
    this.name = name;

    // sprite path for image
    this.spritePath = spritePath;

    // for dragging
    this.isDragged = false;
    this.mouseOffsetX = 0;
    this.mouseOffsetY = 0;
  }

  // displays ingredient
  show() {
    // show image
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

// cheese subclass
class Cheese extends Ingredient {
    constructor(posX, posY) { 
        super(posX, posY, "server_files/assets/Shredded_Cheese_Ver_3.png", "cheese");
        this.positionArray[0] = this.centerArray[0];
        this.positionArray[1] = this.centerArray[1];
    }
}

// tomato subclass
class Tomato extends Ingredient {
    constructor(posX, posY) { 
        super(posX, posY, "server_files/assets/Diced_Tomatoes.png", "tomato");

        // set position from center
        this.positionArray[0] = this.centerArray[0];
        this.positionArray[1] = this.centerArray[1];
    }
}

// beef subclass
class Beef extends Ingredient {
    constructor(posX, posY) { 
        super(posX, posY, "server_files/assets/Ground_Beef.png", "beef");

        // set position from center
        this.positionArray[0] = this.centerArray[0];
        this.positionArray[1] = this.centerArray[1];
    }
}

// lettuce subclass
class Lettuce extends Ingredient {
    constructor(posX, posY) { 
        super(posX, posY, "server_files/assets/Lettuce.png", "lettuce");

        // set position from center
        this.positionArray[0] = this.centerArray[0];
        this.positionArray[1] = this.centerArray[1];
    }
}

// sour cream subclass
class SourCream extends Ingredient {
    constructor(posX, posY) { 
        super(posX, posY, "server_files/assets/Sour_Cream.png", "sour_cream");

        // set position from center
        this.positionArray[0] = this.centerArray[0];
        this.positionArray[1] = this.centerArray[1];
    }
}

class TacoOrder {
    constructor (posX, posY, spritePath, actualOrder) {
        // x and y position of taco image
        this.posX = posX;
        this.posY = posY;

        // taco image to be displayed
        this.tacoSprite = loadImage(spritePath);

        // order completion
        this.complete = false;

        // order to be checked against when completeing
        this.actualOrder = actualOrder;
    }

    // draws the taco
    show() { 
        image(this.tacoSprite, this.posX - 38, this.posY - 5, 100, 100);
    }

    // returns if order is complete
    isComplete(order) {
        return sortArrayEquals(order, this.actualOrder);
    }
}