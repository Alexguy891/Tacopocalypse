// runner constants
let RUNNER_POS_X = 0;
let RUNNER_POS_Y = 400 - 20;
let RUNNER_COLLISION_HEIGHT = 20;
let RUNNER_COLLISION_WIDTH = 20;
let RUNNER_SIZE_HEIGHT = 20;
let RUNNER_SIZE_WIDTH = 20;
let RUNNER_SPRITE_PATH = "runner_files/assets/test_runner.jpg"
let RUNNER_LIVES_AMOUNT = 3;

// obstacle constants
let OBSTACLE_POS_X = 720;
let OBSTACLE_POS_Y = 400 - 20;
let OBSTACLE_COLLISION_HEIGHT = 20;
let OBSTACLE_COLLISION_WIDTH = 20;
let OBSTACLE_SIZE_HEIGHT = 20;
let OBSTACLE_SIZE_WIDTH = 20;
let OBSTACLE_SPRITE_PATH = "runner_files/assets/test_obstacle.jpg";
let OBSTACLE_SPEED = 5;
let OBSTACLE_LIFE_DAMAGE = 1;

function setup() {
    createCanvas(720, 400);

    // create runner
    runner = new RunnerEntity(RUNNER_POS_X, RUNNER_POS_Y, RUNNER_COLLISION_HEIGHT, 
        RUNNER_COLLISION_WIDTH,RUNNER_SIZE_HEIGHT, 
        RUNNER_SIZE_WIDTH, RUNNER_SPRITE_PATH, RUNNER_LIVES_AMOUNT);

    // create 3 obstacles
    obstacle1 = new ObstacleEntity(OBSTACLE_POS_X, OBSTACLE_POS_Y, OBSTACLE_COLLISION_HEIGHT, 
        OBSTACLE_COLLISION_WIDTH, OBSTACLE_SIZE_HEIGHT, OBSTACLE_SIZE_WIDTH, OBSTACLE_SPRITE_PATH, 
        OBSTACLE_SPEED, OBSTACLE_LIFE_DAMAGE);
    obstacle2 = new ObstacleEntity(OBSTACLE_POS_X + 200, OBSTACLE_POS_Y, OBSTACLE_COLLISION_HEIGHT, 
        OBSTACLE_COLLISION_WIDTH, OBSTACLE_SIZE_HEIGHT, OBSTACLE_SIZE_WIDTH, OBSTACLE_SPRITE_PATH, 
        OBSTACLE_SPEED, OBSTACLE_LIFE_DAMAGE);
    obstacle3 = new ObstacleEntity(OBSTACLE_POS_X + 500, OBSTACLE_POS_Y, OBSTACLE_COLLISION_HEIGHT, 
        OBSTACLE_COLLISION_WIDTH, OBSTACLE_SIZE_HEIGHT, OBSTACLE_SIZE_WIDTH, OBSTACLE_SPRITE_PATH, 
        OBSTACLE_SPEED, OBSTACLE_LIFE_DAMAGE);
}

function draw() {
    background(220);
    
    // display runner
    runner.show();

    // checking for collision of all obstacles
    runner.collision(obstacle1);
    runner.collision(obstacle2);
    runner.collision(obstacle3);

    // show obstacles
    obstacle1.show();
    obstacle2.show();
    obstacle3.show();
}