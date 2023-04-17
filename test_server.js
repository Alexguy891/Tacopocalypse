// ingredient tub constants
CHEESE_TUB_COORDINATES = [15, 261, 106, 301];
TOMATO_TUB_COORDINATES = [127, 261, 218, 301];
BEEF_TUB_COORDINATES = [240, 261, 331, 301];
LETTUCE_TUB_COORDINATES = [70, 330, 161, 370];
SOURCREAM_TUB_COORDINATES = [125, 330, 216, 370];

// ingredient spawn constants
CHEESE_SPAWN_COORDINATES = [(CHEESE_TUB_COORDINATES[0] + CHEESE_TUB_COORDINATES[2]) / 2, 
                            (CHEESE_TUB_COORDINATES[1] + CHEESE_TUB_COORDINATES[3]) / 2];
TOMATO_SPAWN_COORDINATES = [(TOMATO_TUB_COORDINATES[0] + TOMATO_TUB_COORDINATES[2]) / 2,
                            (TOMATO_TUB_COORDINATES[1] + TOMATO_TUB_COORDINATES[3]) / 2];
BEEF_SPAWN_COORDINATES = [(BEEF_TUB_COORDINATES[0] + BEEF_TUB_COORDINATES[2]) / 2,
                            (BEEF_TUB_COORDINATES[1] + BEEF_TUB_COORDINATES[3]) / 2];
LETTUCE_SPAWN_COORDINATES = [(LETTUCE_TUB_COORDINATES[0] + LETTUCE_TUB_COORDINATES[2]) / 2,
                            (LETTUCE_TUB_COORDINATES[1] + LETTUCE_TUB_COORDINATES[3]) / 2];
SOURCREAM_SPAWN_COORDINATES = [(SOURCREAM_TUB_COORDINATES[0] + SOURCREAM_TUB_COORDINATES[2]) / 2,
                            (SOURCREAM_TUB_COORDINATES[1] + SOURCREAM_TUB_COORDINATES[3]) / 2];

// trash can constants
TRASH_COORDINATES = [553, 282, 708, 333]

// taco image assets
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

// order position constants
INITIAL_X = 75;
INITIAL_Y = 20;

// array of taco images
orderImages = [];

// arrays for order generation and current stack
orderList = [];
currentIngredientStack = [];

// player score
playerScore = 0;

// for order testing
var orderTest;
testing = true;

function setup() {
    createCanvas(720, 400);
    background(220);

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

    orderList.push("Beef");
    orderList.push("Beef, Lettuce");
    orderList.push("Beef, Cheese");
    orderList.push("Beef, Tomato");
    orderList.push("Beef, Sour_Cream");
    orderList.push("Beef, Lettuce, Cheese");
    orderList.push("Beef, Cheese, Tomato");
    orderList.push("Beef, Cheese, Sour_Cream");
    orderList.push("Beef, Lettuce, Tomato");
    orderList.push("Beef, Lettuce, Sour_Cream");
    orderList.push("Beef, Tomato, Sour_Cream");
    orderList.push("Beef, Lettuce, Tomato, Sour_Cream");
    orderList.push("Beef, Cheese, Tomato, Sour_Cream");
    orderList.push("Beef, Lettuce, Tomato, Cheese");
    orderList.push("Beef, Lettuce, Cheese, Sour_Cream");
    orderList.push("Beef, Lettuce, Cheese, Tomato, Sour_Cream");

    // generate first order
    order = generateOrder();

    // load window art image
    windowArt = loadImage("server_files/assets/Window_Art_v2.png");

    // ingredient declaration
    ingredient = new Ingredient(0, 0, "server_files/assets/Ground_Beef.png", "beef");

    // for showing/hiding on ingredient spawn
    showIngredient = false;
}

function draw() {
    background(220);

    // show window art image
    image(windowArt, 0, 0, 720, 400);

    // for testing
    text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
    stroke(0);

    // show ingredient if spawned
    if(showIngredient) {
        ingredient.show();
    }

    // update if being dragged
    ingredient.update();

    // generate order after previous order is complete
    if(order.isComplete(orderTest) && testing == true) {
        testing = false;

        order = generateOrder();
        increaseScore(100);

        //makes it so the if statement runs every 5 seconds
        const myTimeout = setTimeout(setIfLoop, 5000);
    }

    order.show();
}

//for testing
function setIfLoop() {
    testing = true;
}

//increases the player's score
function increaseScore(scoreIncrease) {
    playerScore += scoreIncrease;
    console.log(playerScore);
}

// runs when mouse pressed anywhere
function mousePressed() {
    // checks for mouse click
    ingredient.clicked();

    // checks mouse for ingredient tub click if no ingredient spawned
    if(!ingredient.isDragged) {
        checkTubCoordinates();
    }
}

function checkTubCoordinates() {
    if (mouseX > CHEESE_TUB_COORDINATES[0] && mouseY > CHEESE_TUB_COORDINATES[1] && mouseX < CHEESE_TUB_COORDINATES[2] && mouseY < CHEESE_TUB_COORDINATES[3]) {
        ingredient = new Cheese(CHEESE_SPAWN_COORDINATES[0], CHEESE_SPAWN_COORDINATES[1]);
        showIngredient = true;
    } else if (mouseX > TOMATO_TUB_COORDINATES[0] && mouseY > TOMATO_TUB_COORDINATES[1] && mouseX < TOMATO_TUB_COORDINATES[2] && mouseY < TOMATO_TUB_COORDINATES[3]) {
        ingredient = new Tomato(TOMATO_SPAWN_COORDINATES[0], TOMATO_SPAWN_COORDINATES[1]);
        showIngredient = true;
    } else if (mouseX > BEEF_TUB_COORDINATES[0] && mouseY > BEEF_TUB_COORDINATES[1] && mouseX < BEEF_TUB_COORDINATES[2] && mouseY < BEEF_TUB_COORDINATES[3]) {
        ingredient = new Beef(BEEF_SPAWN_COORDINATES[0], BEEF_SPAWN_COORDINATES[1]);
        showIngredient = true;
    } else if (mouseX > LETTUCE_TUB_COORDINATES[0] && mouseY > LETTUCE_TUB_COORDINATES[1] && mouseX < LETTUCE_TUB_COORDINATES[2] && mouseY < LETTUCE_TUB_COORDINATES[3]) {
        ingredient = new Lettuce(LETTUCE_SPAWN_COORDINATES[0], LETTUCE_SPAWN_COORDINATES[1]);
        showIngredient = true;
    } else if (mouseX > SOURCREAM_TUB_COORDINATES[0] && mouseY > SOURCREAM_TUB_COORDINATES[1] && mouseX < SOURCREAM_TUB_COORDINATES[2] && mouseY < SOURCREAM_TUB_COORDINATES[3]) {
        ingredient = new SourCream(SOURCREAM_SPAWN_COORDINATES[0], SOURCREAM_SPAWN_COORDINATES[1]);
        showIngredient = true;
    }
}

// runs when mouse released anywhere
function mouseReleased() {
    // checks if ingredient is dropped on trash
    if (mouseX > TRASH_COORDINATES[0] && mouseY > TRASH_COORDINATES[1] && mouseX < TRASH_COORDINATES[2] && mouseY < TRASH_COORDINATES[3] && ingredient.isDragged) {
        showIngredient = false;
    }

    // checks for mouse release
    ingredient.release();
}

// gets random int up to max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// generates new order
function generateOrder() {
    chooseOrder = getRandomInt(15);
    order = new TacoOrder(INITIAL_X, INITIAL_Y, orderImages[chooseOrder], orderList[chooseOrder]);
    orderTest = orderList[chooseOrder];
    return order;
}