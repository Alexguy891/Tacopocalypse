let player;
let zombies = [];
let timer = 5;


function setup() {
  createCanvas(800, 250);
  player = new Player(); 
}

function keyPressed() {
  if(key == ' ') {
    player.jump();
  }
}

function draw() {
  background(220);
  player.show();
  player.move();
  
  if(random(1) < 0.01) {
    zombies.push(new Zombie());
    print("NEW ZOMBIE!");
  }
  
  
  for(var zombie of zombies) {
    zombie.show();
    zombie.move();
    
    if(player.hits(zombie)) {
      if(!player.isHit) {
        player.isHit = true;
        player.lives -= 1;
        print("Current Lives: " + player.lives);

        if(player.lives == 0) {
          print("Game Over!");
          noLoop();
        }
      }
    }
  
    if(player.isHit == true && timer > 0) {
      if (frameCount % 60 == 0 && timer > 0) {
        timer--;
        print(timer);
      }
      if (timer == 0) {
        player.isHit = false;
        timer = 5;
      }
    }
  }
  
  
}
