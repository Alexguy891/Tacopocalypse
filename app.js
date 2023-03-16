function setup() {
    createCanvas(720, 400);
  
    runner = new RunnerEntity(50, 50, 50, 50, 50, 50, 'assets/waffle.jpg', 3);
    obstacleA = new ObstacleEntity(width  , height - 10, 50, 25, 50, 25, 'assets/waffle2.jpg', true, true, 3, 1);
    obstacleB = new ObstacleEntity(width + 200 , height -20, 50, 25, 50, 25, 'assets/waffle2.jpg', true, true, 2, 1);     
    obstacleC = new ObstacleEntity(width + 300 , height - 5, 50, 25, 50, 25, 'assets/waffle2.jpg', true, true, 5, 1);   
}

function draw() {
    background(200);
    runner.runnerShow();
    obstacleA.show();
  for(var i = 0; i < ObstacleList.length; i++){
    ObstacleList[i].show();
    runner.collision(ObstacleList[i])
  }
  runner.collision(obstacleA);
    //obstacleB.show();
    //obstacleC.show();
}
