function setup() {
    createCanvas(720, 400);
    runner = new RunnerEntity(10, 10, 20, 20, 20, 20, "test", 3);
    obstacle = new ObstacleEntity(height, 10, 20, 20, 20, 20, "test", 5, 1);
}

function draw() {
    background(220);
    runner.show();
    obstacle.show();
}