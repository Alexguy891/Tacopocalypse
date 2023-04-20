var score = 0;
var lastHit = 0; //stores second, minute for hit detection
var hitResetTimer = 2000;
var currentResetTimer = -1;

showHitboxes = true;

class RunnerEntity extends Entity {
    constructor(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, livesAmount) {
        super(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, true, true);

        // status
        this.dead = false;

        // lives before reset
        this.livesAmount = livesAmount;

        // for jumping
        this.velocity = 0;
        this.gravity = 12;
    }

    // loss of lives
    collision(ObstacleEntity) {
        if(((this.positionArray[0] + this.collisionArray[0] >= ObstacleEntity.positionArray[0] && 
          this.positionArray[0] <= ObstacleEntity.positionArray[0]) || 
          (this.positionArray[0] <= ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[0] &&
          this.positionArray[0] + this.collisionArray[1] >= ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[1])) && 
          this.positionArray[1] + this.collisionArray[1] >= ObstacleEntity.positionArray[1]) {
            if(ObstacleEntity.lifeDamage > 0) {
              if(millis() > currentResetTimer) {
                this.livesAmount -= ObstacleEntity.lifeDamage;
                currentResetTimer = millis() + hitResetTimer;
              }
            } else {
              ObstacleEntity.squished = true;
            }
        }  

        if (this.livesAmount <= 0) {
            this.dead = true;
            print("player death")
        }
    }
    
    show() {
      // show image
      image(this.spriteImage, this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);
      // fill(51);
      // rect(this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);

      console.log("x: " + this.positionArray[0] + ", y: " + this.positionArray[1] + " | v: " + this.velocity + " | g: " + this.gravity);

      if(showHitboxes) {
        noFill();
        rect(this.positionArray[0], this.positionArray[1], this.collisionArray[0], this.collisionArray[1]);
      }
        
      // for jumping
      if(this.positionArray[1] + this.collisionArray[1] < height) {
        this.positionArray[1] += this.gravity;
      }  
      
      this.positionArray[1] += this.velocity; //?? i have no clue what this does.
      this.velocity /= 1.2;
      
      // spacebar jump
      if(keyIsDown(32) && this.positionArray[1] + this.collisionArray[1] >= height) {
          this.velocity = -50;
          keyCode = DOWN_ARROW;
      }
    }
}