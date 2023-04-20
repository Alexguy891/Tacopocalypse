// length of time between hits
var hitResetTimer = 2000;

// for current hit timer
var currentResetTimer = -1;

// for showing runner hitboxes
showHitboxes = true;

class RunnerEntity extends Entity {
    constructor(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, livesAmount) {
        super(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, true, true);

        // status of dead or alive
        this.dead = false;

        // lives before death
        this.livesAmount = livesAmount;

        // for jumping
        this.velocity = 0;
        this.gravity = 12;
    }

    // loss of lives
    collision(ObstacleEntity) {
      // check if hitboxes collided
      if(((this.positionArray[0] + this.collisionArray[0] >= ObstacleEntity.positionArray[0] && 
        this.positionArray[0] <= ObstacleEntity.positionArray[0]) || 
        (this.positionArray[0] <= ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[0] &&
        this.positionArray[0] + this.collisionArray[1] >= ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[1])) && 
        this.positionArray[1] + this.collisionArray[1] >= ObstacleEntity.positionArray[1]) {
          // check if obstacle deals damage
          if(ObstacleEntity.lifeDamage > 0) {
            // check if hit reset timer has passed
            if(millis() > currentResetTimer) {
              // reduce lives by damage amount
              this.livesAmount -= ObstacleEntity.lifeDamage;

              // reset timer
              currentResetTimer = millis() + hitResetTimer;
            }
          } else {
            // if object doesn't deal damage, squish it
            ObstacleEntity.squished = true;
          }
      }  
      
      // check if dead
      if (this.livesAmount <= 0) {
          this.dead = true;
      }
    }
    
    show() {
      // show image
      image(this.spriteImage, this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);

      // for hitbox debugging
      if(showHitboxes) {
        noFill();
        rect(this.positionArray[0], this.positionArray[1], this.collisionArray[0], this.collisionArray[1]);
      }
        
      // fall with gravity if above ground
      if(this.positionArray[1] + this.collisionArray[1] < height) {
        this.positionArray[1] += this.gravity;
      }  
      
      // slowly increase fall speed
      this.positionArray[1] += this.velocity;
      this.velocity /= 1.2;
      
      // spacebar jump
      if(keyIsDown(32) && this.positionArray[1] + this.collisionArray[1] >= height) {
        // increase upwards velocity
        this.velocity = -50;

        // reset key press
        keyCode = DOWN_ARROW;
      }
    }
}