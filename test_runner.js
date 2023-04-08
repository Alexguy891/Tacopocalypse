// runner constants
let RUNNER_POS_X = 100;
let RUNNER_POS_Y = 400 - 20;
let RUNNER_COLLISION_HEIGHT = 20;
let RUNNER_COLLISION_WIDTH = 20;
let RUNNER_SIZE_HEIGHT = 20;
let RUNNER_SIZE_WIDTH = 20;
let RUNNER_SPRITE_PATH = "runner_files/assets/test_runner.jpg"
let RUNNER_LIVES_AMOUNT = 3;

// obstacle position spawn constants
let OBSTACLE_POS_X = 720;
let OBSTACLE_POS_Y = 400 - 20;
let MIN_OBSTACLE_SPAWN_TIME = 1000;
let MAX_OBSTACLE_SPAWN_TIME = 2500;

// obstacle object array
let OBSTACLE_ARRAY = [];

// spawn timer for obstacles
let spawnTimer = 0;

function setup() {
    createCanvas(720, 400);

    // create runner
    runner = new RunnerEntity(RUNNER_POS_X, RUNNER_POS_Y, RUNNER_COLLISION_HEIGHT, 
        RUNNER_COLLISION_WIDTH,RUNNER_SIZE_HEIGHT, 
        RUNNER_SIZE_WIDTH, RUNNER_SPRITE_PATH, RUNNER_LIVES_AMOUNT);    
}

function draw() {
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

function generateObstacle() {
    // randomly generate type of obstacle
    // placeholders for now
    obstacle_collision_height = 20;
    obstacle_collision_width = 20;
    obstacle_size_height = 20;
    obstacle_size_width = 20;
    obstacle_sprite_path = "runner_files/assets/test_obstacle.jpg";
    obstacle_speed = 5;
    obstacle_life_damage = 1;

    // create obstacle object
    obstacle = new ObstacleEntity(OBSTACLE_POS_X, OBSTACLE_POS_Y, obstacle_collision_height, 
        obstacle_collision_width, obstacle_size_height, 
        obstacle_size_width, obstacle_sprite_path, obstacle_speed, obstacle_life_damage);

    // add obstacle to array
    OBSTACLE_ARRAY.push(obstacle);
}