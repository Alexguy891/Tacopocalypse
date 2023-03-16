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

function setup() {
    createCanvas(720, 400);
    
    // create ingredient
    ingredient = new Ingredient(INGREDIENT_POSX, INGREDIENT_POSY, INGREDIENT_COLLISIONHEIGHT, 
        INGREDIENT_COLLISIONWIDTH, INGREDIENT_SIZEHEIGHT, INGREDIENT_SIZEWIDTH,
        INGREDIENT_SPRITEPATH, INGREDIENT_NAME, INGREDIENT_COOKINGTIME);
}

function draw() {
    background(220);

    // update if being dragged
    ingredient.update();

    // show ingredient
    ingredient.show();
}

// runs when mouse pressed anywhere
function mousePressed() {
    // checks for mouse click
    ingredient.clicked();
}

// runs when mouse released anywhere
function mouseReleased() {
    // checks for mouse release
    ingredient.release();
}