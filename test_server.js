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

TACO_1 = "server_files/assets/taco01.png";
TACO_2 = "server_files/assets/taco02.png";
TACO_3 = "server_files/assets/taco03.png";
TACO_4 = "server_files/assets/taco04.png";
TACO_5 = "server_files/assets/taco05.png";
TACO_6 = "server_files/assets/taco06.png";
TACO_7 = "server_files/assets/taco07.png";
TACO_8 = "server_files/assets/taco08.png";
TACO_9 = "server_files/assets/taco09.png";
TACO_10 = "server_files/assets/taco10.png";
TACO_11 = "server_files/assets/taco11.png";
TACO_12 = "server_files/assets/taco12.png";
TACO_13 = "server_files/assets/taco13.png";
TACO_14 = "server_files/assets/taco14.png";
TACO_15 = "server_files/assets/taco15.png";
TACO_16 = "server_files/assets/taco16.png";
orderImages = [];
orderList = [];
initialX = 75;
initialY = 20;


function setup() {
    createCanvas(720, 400);
    background(220);
    
    // create ingredient
    ingredient = new Ingredient(INGREDIENT_POSX, INGREDIENT_POSY, INGREDIENT_COLLISIONHEIGHT, 
        INGREDIENT_COLLISIONWIDTH, INGREDIENT_SIZEHEIGHT, INGREDIENT_SIZEWIDTH,
        INGREDIENT_SPRITEPATH, INGREDIENT_NAME, INGREDIENT_COOKINGTIME);

    orderImages.push(TACO_1);
    orderImages.push(TACO_2);
    orderImages.push(TACO_3);
    orderImages.push(TACO_4);
    orderImages.push(TACO_5);
    orderImages.push(TACO_6);
    orderImages.push(TACO_7);
    orderImages.push(TACO_8);
    orderImages.push(TACO_9);
    orderImages.push(TACO_10);
    orderImages.push(TACO_11);
    orderImages.push(TACO_12);
    orderImages.push(TACO_13);
    orderImages.push(TACO_14);
    orderImages.push(TACO_15);
    orderImages.push(TACO_16);

    frameRate(60);
}

function draw() {
    background(220);

    // update if being dragged
    ingredient.update();

    // show ingredient
    ingredient.show();

    if (frameCount % 600 == true) {
        generateOrder();
    }

    chooseOrder = getRandomInt(15);
    order = new TacoOrder(initialX, initialY, orderImages[chooseOrder]);
    orderList.push(order);
    order.show();
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateOrder() {
    chooseOrder = getRandomInt(15);
    order = new TacoOrder(initialX, initialY, orderImages[chooseOrder]);
    orderList.push(order);
    order.show();
}