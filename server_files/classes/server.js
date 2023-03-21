class Ingredient extends Entity {
    constructor (posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, name, cookingTime) {
        super(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, false, true);

        // ingredient name
        this.name = name;

        // time to cook
        this.cookingTime = cookingTime;

        // array for ingredient names within TacoShell ingredient objects
        this.ingredientStack = [];
        if(this.name == "TacoShell") {
            this.ingredientStack.push(this.name);
        }

        // for cooked checking
        this.cooked = false;

        // for dragging
        this.isDragged = false;
        this.mouseOffsetArray = [0, 0];

        // for returning to previous position
        this.prevPositionArray = [0, 0];
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
              this.prevPositionArray[0] = this.positionArray[0];
              this.prevPositionArray[1] = this.positionArray[1];

              // track dragging coords
              this.mouseOffsetX = this.positionArray[0] - mouseX;
              this.mouseOffsetY = this.positionArray[1] - mouseY;
        }
    }

    // reset drag variable after release
    release() {
        let ret = false;
        if(isDragged) {
            ret = true;
        }
        this.isDragged = false;
        return ret;
    }

    // update position when dragged
    update() {
        if(this.isDragged) {
          this.positionArray[0] = mouseX + this.mouseOffsetArray[0];
          this.positionArray[1] = mouseY + this.mouseOffsetArray[1];
        }
    }

    isStackable(ingredient) {
        if(this.name != "Taco Shell") 
            return false;
        ingredientStack.forEach(it => {
            if(it == ingredient.name) {
                return false;
            }
        });
        return true;
    }

    addIngredient(ingredient) {
        if(this.isStackable(ingredient)) {
            this.ingredientStack.push(ingredient.name);
            return true;
            // Call somewhere to obliterate added ingredient object
        }
        return false;
    }

    isColliding(ingredient) {
        if (mouseX > ingredient.positionArray[0] && mouseX < ingredient.positionArray[0] + ingredient.collisionArray[1] 
            && mouseY > ingredient.positionArray[1] && mouseY < ingredient.positionArray[1] + ingredient.collisionArray[0]) {
            return true;
        }
        return false;
    }

    bounce() {
        this.positionArray[0] = this.prevPositionArray[0];
        this.positionArray[1] = this.prevPositionArray[1];
    }
}





// // define starting positions of images
// const startPositions = [
//     { image: 'tacoShellImg', x: 10, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 },
//     { image: 'tacoMeatImg', x: 60, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: 3 },
//     { image: 'tomatoImg', x: 110, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 },
//     { image: 'cheeseImg', x: 160, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 },
//     { image: 'hotSauceImg', x: 210, y: 10, width: 50, height: 50, ingredient: Ingredient, cookingTime: -1 }
//   ];
  
//   // define target area for each type of ingredient
//   const targetAreas = [
//     { image: 'tacoShellImg', x: 300, y: 10 },
//     { image: 'tacoMeatImg', x: 300, y: 80 },
//     { image: 'tomatoImg', x: 300, y: 150 },
//     { image: 'cheeseImg', x: 300, y: 220 },
//     { image: 'hotSauceImg', x: 300, y: 290 }
//   ];