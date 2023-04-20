// state options
const States = {
    runner: "runner",
    server: "server",
    start: "start",
    gameover: "gameover",
    paused: "paused"
}

// game state
var gameState = States.start;
var previousGameState = States.start;

// timers
let runnerTimer = 20000;
let serverTimer = 15000;
var currentRunnerTimer = runnerTimer;
var currentServerTimer = serverTimer;
var differenceFromRunnerTimer = 0;
var differenceFromServerTimer = 0;

// start menu button coordinates
let START_BUTTON_COORDINATES = [175, 231, 527, 290];
let INSTRUCTIONS_BUTTON_COORDINATES = [575, 7, 679, 41];

// game over menu button coordinates
let RESTART_BUTTON_COORDINATES = [161, 230, 536, 290];

// runner constants
let RUNNER_POS_X = 100;
let RUNNER_COLLISION_HEIGHT = 70;
let RUNNER_COLLISION_WIDTH = 60;
let RUNNER_SIZE_HEIGHT = 100;
let RUNNER_SIZE_WIDTH = 100;
let RUNNER_SPRITE_PATH = "runner_files/assets/Food_Truck.png"
let RUNNER_LIVES_AMOUNT = 3;
let RUNNER_POS_Y = 400 - 60;

// obstacle position spawn constants
let OBSTACLE_POS_X = 720;
let MIN_OBSTACLE_SPAWN_TIME = 500;
let MAX_OBSTACLE_SPAWN_TIME = 2500;

// obstacle constants
let RUNNER_DAMAGE = 1;
let SCROLL_SPEED = 10;
let minZombieSpeed = 5;
let maxZombieSpeed = 15;

// rubble obstacle constants
let RUBBLE_POS_Y = 400 - 28;
let RUBBLE_COLLISION_HEIGHT = 48;
let RUBBLE_COLLISION_WIDTH = 40;
let RUBBLE_SIZE_HEIGHT = 80;
let RUBBLE_SIZE_WIDTH = 80;
let RUBBLE_SPRITE_PATH = "runner_files/assets/Rubble.png";

// wall obstacle constants
let WALL_POS_Y = 400 - 40;
let WALL_COLLISION_HEIGHT = 15;
let WALL_COLLISION_WIDTH = 40;
let WALL_SIZE_HEIGHT = 60;
let WALL_SIZE_WIDTH = 65;
let WALL_SPRITE_PATH = "runner_files/assets/Wall_Obstacle_v3.png";

// spike pad obstacle constants
let SPIKEPAD_POS_Y = 400 - 28;
let SPIKEPAD_COLLISION_HEIGHT = 53;
let SPIKEPAD_COLLISION_WIDTH = 60;
let SPIKEPAD_SIZE_HEIGHT = 100;
let SPIKEPAD_SIZE_WIDTH = 100;
let SPIKEPAD_SPRITE_PATH = "runner_files/assets/Spike_Pad_Obstacle.png";

// zombie pad obstacle constants
let ZOMBIE_POS_Y = 400 - 30;
let ZOMBIE_COLLISION_HEIGHT = 20;
let ZOMBIE_COLLISION_WIDTH = 60;
let ZOMBIE_SIZE_HEIGHT = 60;
let ZOMBIE_SIZE_WIDTH = 60;
let ZOMBIE_SPRITE_PATH = "runner_files/assets/Zombie_Obstacle.png";
let ZOMBIE_SPEED = 7;

// obstacle object array
let OBSTACLE_ARRAY = [];

// spawn timer for obstacles
let spawnTimer = 0;

// ingredient tub constants
CHEESE_TUB_COORDINATES = [15, 261, 106, 301];
TOMATO_TUB_COORDINATES = [127, 261, 218, 301];
BEEF_TUB_COORDINATES = [240, 261, 331, 301];
LETTUCE_TUB_COORDINATES = [70, 330, 161, 370];
SOURCREAM_TUB_COORDINATES = [184, 330, 275, 370];

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
TRASH_COORDINATES = [553, 282, 708, 333];

// plate coordinates
PLATE_COORDINATES = [356, 241, 539, 377];

// ingredient stack coordinates
INGREDIENT_STACK_COORDINATES = [(PLATE_COORDINATES[0] + PLATE_COORDINATES[2]) / 2, (PLATE_COORDINATES[1] + PLATE_COORDINATES[3]) / 2];

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
TACO_17 = "server_files/assets/taco17.png";
TACO_18 = "server_files/assets/taco18.png";
TACO_19 = "server_files/assets/taco19.png";
TACO_20 = "server_files/assets/taco20.png";
TACO_21 = "server_files/assets/taco21.png";
TACO_22 = "server_files/assets/taco22.png";
TACO_23 = "server_files/assets/taco23.png";
TACO_24 = "server_files/assets/taco24.png";
TACO_25 = "server_files/assets/taco25.png";
TACO_26 = "server_files/assets/taco26.png";
TACO_27 = "server_files/assets/taco27.png";
TACO_28 = "server_files/assets/taco28.png";
TACO_29 = "server_files/assets/taco29.png";
TACO_30 = "server_files/assets/taco30.png";
TACO_31 = "server_files/assets/taco31.png";

// order position constants
INITIAL_X = 350;
INITIAL_Y = 20;

// array of taco images
orderImages = [];

// arrays for order generation and current stack
orderList = [];
currentIngredientStack = [];

// player score
playerScore = 0;

function setup() {
        createCanvas(720, 400);

        // create runner
        runner = new RunnerEntity(RUNNER_POS_X, RUNNER_POS_Y, RUNNER_COLLISION_HEIGHT, 
            RUNNER_COLLISION_WIDTH, RUNNER_SIZE_HEIGHT,
            RUNNER_SIZE_WIDTH, RUNNER_SPRITE_PATH, RUNNER_LIVES_AMOUNT);
            
        background(220);

        // push all images to orderImages array
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
        orderImages.push(TACO_17);
        orderImages.push(TACO_18);
        orderImages.push(TACO_19);
        orderImages.push(TACO_20);
        orderImages.push(TACO_21);
        orderImages.push(TACO_22);
        orderImages.push(TACO_23);
        orderImages.push(TACO_24);
        orderImages.push(TACO_25);
        orderImages.push(TACO_26);
        orderImages.push(TACO_27);
        orderImages.push(TACO_28);
        orderImages.push(TACO_29);
        orderImages.push(TACO_30);
        orderImages.push(TACO_31);

        // push all order combos to orderList array
        orderList.push(["beef"]);
        orderList.push(["beef", "lettuce"]);
        orderList.push(["beef", "cheese"]);
        orderList.push(["beef", "tomato"]);
        orderList.push(["beef", "sour_cream"]);
        orderList.push(["beef", "cheese", "lettuce"]);
        orderList.push(["beef", "cheese", "tomato"]);
        orderList.push(["beef", "cheese", "sour_cream"]);
        orderList.push(["beef", "lettuce", "tomato"]);
        orderList.push(["beef", "lettuce", "sour_cream"]);
        orderList.push(["beef", "sour_cream", "tomato"]);
        orderList.push(["beef", "lettuce", "sour_cream", "tomato"]);
        orderList.push(["beef", "cheese", "sour_cream", "tomato"]);
        orderList.push(["beef", "cheese", "lettuce", "tomato"]);
        orderList.push(["beef", "cheese", "lettuce", "sour_cream"]);
        orderList.push(["beef", "cheese", "lettuce", "sour_cream", "tomato"]);
        orderList.push(["tomato"]);
        orderList.push(["lettuce"]);
        orderList.push(["cheese"]);
        orderList.push(["sour_cream"]);
        orderList.push(["cheese", "tomato"]);
        orderList.push(["cheese", "lettuce"]);
        orderList.push(["cheese", "sour_cream"]);
        orderList.push(["cheese", "lettuce", "tomato"]);
        orderList.push(["cheese", "sour_cream", "tomato"]);
        orderList.push(["cheese", "lettuce", "sour_cream", "tomato"  ]);
        orderList.push(["lettuce", "tomato"]);
        orderList.push(["sour_cream", "tomato" ]);
        orderList.push(["lettuce", "sour_cream", "tomato"]);
        orderList.push(["lettuce", "sour_cream"]);
        orderList.push(["cheese", "lettuce", "sour_cream"]);

        // generate first order
        order = generateOrder();

        // create initial ingredient stack
        ingredientStack = new Ingredient(INGREDIENT_STACK_COORDINATES[0], INGREDIENT_STACK_COORDINATES[1], "server_files/assets/Taco_Shell.png", "stack");
        ingredientStack.positionArray[0] = ingredientStack.centerArray[0];
        ingredientStack.positionArray[1] = ingredientStack.centerArray[1];

        // load window art image
        windowArt = loadImage("server_files/assets/Window_Art_v2.png");

        // load start screen images
        startScreen = loadImage("menus/assets/main_menu.png");
        startScreenStartHighlight = loadImage("menus/assets/main_menu_start_highlight.png");
        startScreenInstructionsHighlight = loadImage("menus/assets/main_menu_instruct_highlight.png");

        // load gameover screen image
        gameOverScreen = loadImage("menus/assets/game_over.png");
        gameOverScreenHighlight = loadImage("menus/assets/game_over_highlight.png");

        // ingredient declaration
        ingredient = new Ingredient(0, 0, "server_files/assets/Ground_Beef.png", "beef");

        // for showing/hiding on ingredient spawn
        showIngredient = false;
}

function draw() {
    // check if game is in start state
    if(gameState == States.start) {
        // show start screen
        image(startScreen, 0, 0, 720, 400);

        // highlight start button if mouse over it
        if(mouseX > START_BUTTON_COORDINATES[0] && mouseY > START_BUTTON_COORDINATES[1] && mouseX < START_BUTTON_COORDINATES[2] && mouseY < START_BUTTON_COORDINATES[3]) {
            image(startScreenStartHighlight, 0, 0, 720, 400);
        }

        // highlight instructions button if mouse over it
        if(mouseX > INSTRUCTIONS_BUTTON_COORDINATES[0] && mouseY > INSTRUCTIONS_BUTTON_COORDINATES[1] && mouseX < INSTRUCTIONS_BUTTON_COORDINATES[2] && mouseY < INSTRUCTIONS_BUTTON_COORDINATES[3]) {
            image(startScreenInstructionsHighlight, 0, 0, 720, 400);
        }
    }

    // check if game is in gameover state
    if(gameState == States.gameover) {
        // show gameover screen
        image(gameOverScreen, 0, 0, 720, 400);

        // highlight restart button if mouse over it
        if(mouseX > RESTART_BUTTON_COORDINATES[0] && mouseY > RESTART_BUTTON_COORDINATES[1] && mouseX < RESTART_BUTTON_COORDINATES[2] && mouseY < RESTART_BUTTON_COORDINATES[3]) {
            image(gameOverScreenHighlight, 0, 0, 720, 400);
        }
    }

    // check if game is in runner state
    if(gameState == States.runner) {
        console.log((currentRunnerTimer - millis()) / 1000 + "ms");
        // change to gameover if runner is dead
        if(runner.dead) {
            gameState = States.gameover;
            runner.dead = false;
        }

        // switch to server state if runner timer ends
        if(millis() > currentRunnerTimer) {
            // reset server
            resetServer();

            // switch to server state
            gameState = States.server;

            // start server timer
            resetServerTimer();

            // increase obstacle speeds
            SCROLL_SPEED += 1;
            minZombieSpeed += 1;
            maxZombieSpeed += 1;
        }

        background(220);

        // display runner
        runner.show();

        // generate obstacle after random time
        if(millis() > spawnTimer) {
            generateObstacle();
            waitTime = random(MIN_OBSTACLE_SPAWN_TIME, MAX_OBSTACLE_SPAWN_TIME);
            spawnTimer = millis() + waitTime;
        }

        // show obstacles
        for (let i = 0; i < OBSTACLE_ARRAY.length; i++) {
            OBSTACLE_ARRAY[i].show();
        }
        
        // checking for collision of all obstacles
        for (let i = 0; i < OBSTACLE_ARRAY.length; i++) {
            runner.collision(OBSTACLE_ARRAY[i]);
        }

        // remove obstacles that are out of bounds
        for (let i = 0; i < OBSTACLE_ARRAY.length; i++) {
            if(OBSTACLE_ARRAY[i].positionArray[0] < 0 - OBSTACLE_ARRAY[i].sizeArray[0]) {
                OBSTACLE_ARRAY.splice(i, 1);
            }
        }
    } 
    
    // check if game is in server state
    if(gameState == States.server) {
        console.log((currentServerTimer - millis()) / 1000 + "ms");
        // switch to runner state if server timer ends
        if(millis() > currentServerTimer) {
            // reset runner
            resetRunner();

            // switch state
            gameState = States.runner;

            // start runner timer
            resetRunnerTimer();
        }

        background(220);

        // show window art image
        image(windowArt, 0, 0, 720, 400);

        // for testing
        stroke(0);

        // show ingredient if spawned
        if(showIngredient) {
            ingredient.show();
        }

        // update if being dragged
        ingredient.update();
        ingredientStack.update();

        // generate order after previous order is complete
        if(order.isComplete(currentIngredientStack)) {
            order = generateOrder();
            ingredientStack = new Ingredient(INGREDIENT_STACK_COORDINATES[0], INGREDIENT_STACK_COORDINATES[1], "server_files/assets/Taco_Shell.png", "stack");
            ingredientStack.positionArray[0] = ingredientStack.centerArray[0];
            ingredientStack.positionArray[1] = ingredientStack.centerArray[1];
            currentIngredientStack = [];
            increaseScore(100);
        }

        // show order
        order.show();
        
        // show ingredient stack
        ingredientStack.show();
    }
}

function generateObstacle() {
    // randomly generate type of obstacle
    obstaclePick = Math.floor(Math.random() * 10)

    if(obstaclePick > 6) {
        switch(obstaclePick) {
            case 7:
                // Rubble
                obstacle = new ObstacleEntity(OBSTACLE_POS_X, RUBBLE_POS_Y,
                    RUBBLE_COLLISION_HEIGHT, RUBBLE_COLLISION_WIDTH, RUBBLE_SIZE_HEIGHT, RUBBLE_SIZE_WIDTH,
                    RUBBLE_SPRITE_PATH, SCROLL_SPEED, RUNNER_DAMAGE); 

                // add obstacle to array
                OBSTACLE_ARRAY.push(obstacle);
                break;
            case 8:
                // Wall
                obstacle = new ObstacleEntity(OBSTACLE_POS_X, WALL_POS_Y,
                    WALL_COLLISION_HEIGHT, WALL_COLLISION_WIDTH, WALL_SIZE_HEIGHT, WALL_SIZE_WIDTH,
                    WALL_SPRITE_PATH, SCROLL_SPEED, RUNNER_DAMAGE); 

                // add obstacle to array
                OBSTACLE_ARRAY.push(obstacle);
                break;
            case 9:
                // Spike Pad
                obstacle = new ObstacleEntity(OBSTACLE_POS_X, SPIKEPAD_POS_Y,
                    SPIKEPAD_COLLISION_HEIGHT, SPIKEPAD_COLLISION_WIDTH, SPIKEPAD_SIZE_HEIGHT, SPIKEPAD_SIZE_WIDTH,
                    SPIKEPAD_SPRITE_PATH, SCROLL_SPEED, RUNNER_DAMAGE); 

                // add obstacle to array
                OBSTACLE_ARRAY.push(obstacle);
                break;
            default:
                break;
        }
    } else {
        // generate zombie speeds
        min = Math.ceil(minZombieSpeed);
        max = Math.floor(maxZombieSpeed);
        zombieSpeed = Math.floor(Math.random() * (max - min) + min);

        // Zombie
        obstacle = new ObstacleEntity(OBSTACLE_POS_X, ZOMBIE_POS_Y,
            ZOMBIE_COLLISION_HEIGHT, ZOMBIE_COLLISION_WIDTH, ZOMBIE_SIZE_HEIGHT, ZOMBIE_SIZE_WIDTH,
            ZOMBIE_SPRITE_PATH, zombieSpeed, RUNNER_DAMAGE); 

        // add obstacle to array
        OBSTACLE_ARRAY.push(obstacle);
    }
}

//for testing
function setIfLoop() {
    testing = true;
}

//increases the player's score
function increaseScore(scoreIncrease) {
    playerScore += scoreIncrease;
}

// runs when mouse pressed anywhere
function mousePressed() {
    // checks for mouse click on draggable object
    ingredient.clicked();
    ingredientStack.clicked();

    // checks mouse for ingredient tub click if no ingredient spawned
    if(!ingredient.isDragged) {
        checkTubCoordinates();
        ingredient.clicked();
    }
}

function checkTubCoordinates() {
    // checks if mouse is in tub coordinates and spawn its ingredient
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
    // checks if ingredient or ingredient stack is dropped on trash
    if (mouseX > TRASH_COORDINATES[0] && mouseY > TRASH_COORDINATES[1] && mouseX < TRASH_COORDINATES[2] && mouseY < TRASH_COORDINATES[3]) {
        if(ingredient.isDragged) {
            showIngredient = false;
        }

        if (ingredientStack.isDragged) {
            ingredientStack = new Ingredient(INGREDIENT_STACK_COORDINATES[0], INGREDIENT_STACK_COORDINATES[1], "server_files/assets/Taco_Shell.png", "stack");
            ingredientStack.positionArray[0] = ingredientStack.centerArray[0];
            ingredientStack.positionArray[1] = ingredientStack.centerArray[1];
            currentIngredientStack = [];
        }
    }

    // checks if ingredient dropped on plate
    if(mouseX > PLATE_COORDINATES[0] && mouseY > PLATE_COORDINATES[1] && mouseX < PLATE_COORDINATES[2] && mouseY < PLATE_COORDINATES[3] && ingredient.isDragged) {
        if(!currentIngredientStack.includes(ingredient.name)) {
            currentIngredientStack.push(ingredient.name);
        }
        showIngredient = false;

        ingredientStack = showIngredientStack();
    } else if (ingredientStack.isDragged && !(mouseX > TRASH_COORDINATES[0] && mouseY > TRASH_COORDINATES[1] && mouseX < TRASH_COORDINATES[2] && mouseY < TRASH_COORDINATES[3])) {
        ingredientStack.positionArray[0] = INGREDIENT_STACK_COORDINATES[0];
        ingredientStack.positionArray[1] = INGREDIENT_STACK_COORDINATES[1];
        ingredientStack.positionArray[0] = ingredientStack.centerArray[0];
        ingredientStack.positionArray[1] = ingredientStack.centerArray[1];
    }

    // checks for mouse release of draggable object
    ingredient.release();
    ingredientStack.release();

    // checks if mouse on start button and game is in start state
    if(gameState == States.start) { 
        if(mouseX > START_BUTTON_COORDINATES[0] && mouseY > START_BUTTON_COORDINATES[1] && mouseX < START_BUTTON_COORDINATES[2] && mouseY < START_BUTTON_COORDINATES[3]) {
            // change game state to runner
            gameState = States.runner;

            // reset runner timer
            resetRunnerTimer();

            // reset runner
            resetRunner();
        }
    }

    // checks if mouse on restart button and game is in gameover state
    if(gameState == States.gameover) { 
        if(mouseX > RESTART_BUTTON_COORDINATES[0] && mouseY > RESTART_BUTTON_COORDINATES[1] && mouseX < RESTART_BUTTON_COORDINATES[2] && mouseY < RESTART_BUTTON_COORDINATES[3]) {
            // change game state to runner
            gameState = States.runner;

            // reset runner timer
            resetRunnerTimer();

            // reset runner
            resetRunner();

            // reset playerScore
            playerScore = 0;
        }
    }
}

// gets random int up to max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// generates new order
function generateOrder() {
    chooseOrder = getRandomInt(15);
    order = new TacoOrder(INITIAL_X, INITIAL_Y, orderImages[chooseOrder], orderList[chooseOrder]);

    // orderTest = orderList[chooseOrder];
    return order;
}

// checks if two arrays are equal
function sortArrayEquals(array1, array2) {
    // sort both arrays
    array1.sort();
    array2.sort();

    // check for same lengths
    if(array1.length != array2.length) {
        return false;
    }

    // check individual items
    for(var i = 0; i < array1.length; i++) {
        if(array1[i] != array2[i]) {
            return false;
        }
    }
    
    return true;
}

// shows the current ingredient stack
function showIngredientStack() { 
    for(var i = 0; i < orderList.length; i++) {
        if(sortArrayEquals(currentIngredientStack, orderList[i])) {
            ingredientStack = new Ingredient(INGREDIENT_STACK_COORDINATES[0], INGREDIENT_STACK_COORDINATES[1], orderImages[i], "stack");
            ingredientStack.positionArray[0] = ingredientStack.centerArray[0];
            ingredientStack.positionArray[1] = ingredientStack.centerArray[1];
            return ingredientStack;
        }
    }
}

// resets runner gameplay
function resetRunner() {
    OBSTACLE_ARRAY = [];

    // create runner
    runner = new RunnerEntity(RUNNER_POS_X, RUNNER_POS_Y, RUNNER_COLLISION_HEIGHT, 
        RUNNER_COLLISION_WIDTH, RUNNER_SIZE_HEIGHT,
        RUNNER_SIZE_WIDTH, RUNNER_SPRITE_PATH, RUNNER_LIVES_AMOUNT);
}

// resets server gameplay
function resetServer() {
     // generate first order
     order = generateOrder();

     // create initial ingredient stack
     ingredientStack = new Ingredient(INGREDIENT_STACK_COORDINATES[0], INGREDIENT_STACK_COORDINATES[1], "server_files/assets/Taco_Shell.png", "stack");
     ingredientStack.positionArray[0] = ingredientStack.centerArray[0];
     ingredientStack.positionArray[1] = ingredientStack.centerArray[1];

     // ingredient declaration
     ingredient = new Ingredient(0, 0, "server_files/assets/Ground_Beef.png", "beef");

     // for showing/hiding on ingredient spawn
     showIngredient = false; 
}

function resetRunnerTimer() {
    currentRunnerTimer = millis() + runnerTimer;
}

function resetServerTimer() {
    currentServerTimer = millis() + serverTimer;
}