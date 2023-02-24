function setup() {
    createCanvas(720, 400);
    runner = new Runner(height - 50);
    obstacleA = new Obstacle(width, height);
    obstacleB = new Obstacle(width, height / 2);
    obstacleC = new Obstacle(width, height / 4);
}

function draw() {
    background(200);
    runner.show();
    obstacleA.show();
    obstacleB.show();
    obstacleC.show();
}