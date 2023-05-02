// length of time between hits
var hitResetTimer = 2000;
var squishResetTimer = 500;

// for current hit timer
var currentResetTimer = -1;
var currentSquishTimer = -1;

// for showing runner hitboxes
showHitboxes = false;

// ground y coordinate
var groundY = 375;
var lastSquish = 0;

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

    // Used to change food truck to darker version after taking damage
    // Changes back to original version after invincibility period (currentResetTimer)
    resetImage() {
      if (this.livesAmount > 1 && this.livesAmount < 4 && currentResetTimer > millis()) { // this.livesAmount < 4 because 4 is currently max life, prevents starting in this mode
        this.spriteImage = damagedTruck;
      } else if (this.livesAmount > 1 && currentResetTimer < millis()){
        this.spriteImage = startingTruck;
      }
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
              s_damage.play(); //sounds!!
              // reset timer
              currentResetTimer = millis() + hitResetTimer;
            }
          } else if(ObstacleEntity.lifeDamage == 0){
            // if object doesn't deal damage, squish it
            if(millis() > currentSquishTimer){
              playerScore += 25; //get 25 points for killing zombie;
              ObstacleEntity.squished = true;
              currentSquishTimer = millis() + squishResetTimer;
              s_points.play();
              //console.log(currentRunnerTimer)
            }
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
      if(this.positionArray[1] + this.collisionArray[1] < groundY) {
        this.positionArray[1] += this.gravity;
      }  
      
      // slowly increase fall speed
      this.positionArray[1] += this.velocity;
      this.velocity /= 1.2;
      
      // spacebar jump
      if((keyIsDown(32) || mouseIsPressed) && this.positionArray[1] + this.collisionArray[1] >= groundY) {
        // increase upwards velocity
        this.velocity = -50;
        s_jump.play();
        // reset key press
        keyCode = DOWN_ARROW;
      }
    }
}