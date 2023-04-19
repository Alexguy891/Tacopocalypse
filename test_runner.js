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

function setup() {
    createCanvas(720, 400);

    // create runner
    runner = new RunnerEntity(RUNNER_POS_X, RUNNER_POS_Y, RUNNER_COLLISION_HEIGHT, 
        RUNNER_COLLISION_WIDTH, RUNNER_SIZE_HEIGHT,
        RUNNER_SIZE_WIDTH, RUNNER_SPRITE_PATH, RUNNER_LIVES_AMOUNT);    
}

function draw() {
    background(220);

    // display runner
    runner.show();

    console.log(runner.positionArray[0] + ", " + runner.positionArray[1]);
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
    obstaclePick = Math.floor(Math.random() * 10)

    console.log(obstaclePick);
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
        min = Math.ceil(5);
        max = Math.floor(15);
        zombieSpeed = Math.floor(Math.random() * (max - min) + min);

        // Zombie
        obstacle = new ObstacleEntity(OBSTACLE_POS_X, ZOMBIE_POS_Y,
            ZOMBIE_COLLISION_HEIGHT, ZOMBIE_COLLISION_WIDTH, ZOMBIE_SIZE_HEIGHT, ZOMBIE_SIZE_WIDTH,
            ZOMBIE_SPRITE_PATH, zombieSpeed, RUNNER_DAMAGE); 

        // add obstacle to array
        OBSTACLE_ARRAY.push(obstacle); 
    }
}