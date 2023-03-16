function setup() {
    createCanvas(720, 400);
    runner = new Runner(height - 50);
    obstacleA = new Obstacle(width, height);
    obstacleB = new Obstacle(width, height / 2);
    obstacleC = new Obstacle(width, height / 4);
    print("hello")
}

function draw() {
    background(220);
    runner.show();
    obstacleA.show();
    obstacleB.show();
    obstacleC.show();
    print("hello")
}