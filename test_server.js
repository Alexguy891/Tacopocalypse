// ingredient constants
INGREDIENT_POSX = 100; 
INGREDIENT_POSY = 100;
INGREDIENT_COLLISIONHEIGHT = 100; 
INGREDIENT_COLLISIONWIDTH = 100;
INGREDIENT_SIZEHEIGHT = 100; 
INGREDIENT_SIZEWIDTH = 100; 
INGREDIENT_SPRITEPATH = "server_files/assets/Ground_Beef.png";
INGREDIENT_NAME = "ground_beef" 
INGREDIENT_COOKINGTIME = 5;

// ingredient-tracking stack
let interactableStack = [];

function setup() {
    createCanvas(720, 400);
    
    // create ingredient
    ingredient = new Ingredient(INGREDIENT_POSX, INGREDIENT_POSY, INGREDIENT_COLLISIONHEIGHT, 
        INGREDIENT_COLLISIONWIDTH, INGREDIENT_SIZEHEIGHT, INGREDIENT_SIZEWIDTH,
        INGREDIENT_SPRITEPATH, INGREDIENT_NAME, INGREDIENT_COOKINGTIME);

    interactableStack.push(ingredient);
}

function draw() {
    background(220);
    
    // For every ingredient object in the scene...
    interactableStack.forEach(it1 => {
        // update if being dragged
        it1.update();

        // show ingredient
        it1.show();
    });
}

// runs when mouse pressed anywhere
function mousePressed() {
    // For every ingredient object in the scene...
    interactableStack.forEach(it1 => {
        // checks for mouse click
        it1.clicked();
    });
} 

// runs when mouse released anywhere
function mouseReleased() {
    // For every ingredient object in the scene...
    interactableStack.forEach(it1 => {
        // Checks which ingredient was dropped
        if(it1.release()) {
            // Check if ingredient was dropped on another ingredient
            //interactableStack.forEach(it2 => {
            for(let i = 0; i < interactableStack.length; ++i) {
                // Check if ingredient isColliding with dropped ingredient
                if(it1.isColliding(interactableStack[i])) {
                    // If true, try calling addIngredient, which returns a bool;
                    // returns true if ingredient was successfully added, false otherwise
                    if(it1.addIngredient(interactableStack[i])) {
                        // If true, ingredient gets added to found ingredient and we
                        // obliterate added ingredient
                        interactableStack = interactableStack.splice(i, 1);
                    }
                    else {
                        // If false, bounce ingredient back to previous position
                        it1.bounce();
                    }
                }
                else {
                    // If false, bounce ingredient back to previous position
                    it1.bounce();
                }
            });
        }




        /*
        if(it1.release()) {
            // Check if ingredient was dropped on another ingredient
            let collisionStack = [];
            interactableStack.forEach(it2 => {
                if(it2 != it1) {
                    let y = it1.positionArray[1] - it2.positionArray[1];
                    let x = it1.positionArray[0] - it2.positionArray[0];

                    let distance = Math.sqrt(x * x + y * y);
                    collisionStack.push(distance);
                }
                else {
                    collisionStack.push(-1);
                }
            });
            let minDistance = 999999;
            let minIndex = -1;
            for(let i = 0; i < collisionStack.length; ++i) {
                if(collisionStack[i] < minDistance && collisionStack[i] != -1) {
                    minDistance = collisionStack[i];
                    minIndex = interactableStack[i];
                }
            }
            // if so, call addIngredient
            // if true, ingredient gets added to found ingredient and obliterate added ingredient
            // if false, bounce ingredient back to previous position
        }
        */
    });
}