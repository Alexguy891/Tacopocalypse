var score = 0;
var lastHit = 0; //stores second, minute for hit detection
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
        if (ObstacleEntity.lifeDamage == 0) { // Platforms do not damage player
          this.isStandable(ObstacleEntity);
        }
        // if ((ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[0] >= this.positionArray[0]) &&
        //   (ObstacleEntity.positionArray[0] <= this.positionArray[0] + this.collisionArray[0]) &&
        //   (ObstacleEntity.positionArray[1] + ObstacleEntity.collisionArray[1] >= this.positionArray[1]) &&
        //   (ObstacleEntity.positionArray[1] <= this.positionArray[1] + this.collisionArray[1]) && (lastHit + 20 <= score)) {
        if(((this.positionArray[0] + this.collisionArray[0] >= ObstacleEntity.positionArray[0] && 
          this.positionArray[0] <= ObstacleEntity.positionArray[0]) || 
          (this.positionArray[0] <= ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[0] &&
          this.positionArray[0] + this.collisionArray[1] >= ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[1])) && 
          this.positionArray[1] + this.collisionArray[1] >= ObstacleEntity.positionArray[1]) {
            this.livesAmount -= ObstacleEntity.lifeDamage;
            lastHit = score;
        }  

        // (this.positionArray[0] <= ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[1] &&
        //   this.positionArray[0] + this.collisionArray[1] >= ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[1]))

        if (this.livesAmount <= 0) {//todo: on death, stop counting score and 
            this.dead = true;
          print("player death")
        }
    }


    // if runner's x coordinate is in between of a standable object
    // Whenever runner's y coordinate should not be less than the y coordinate of the obstacle if it is standable

    // PLATFORM POSITIONARRAY[0] changes as it approaches the player
    // ''       ''           [1] stays at 380
    // ''       BOTH COLLISION ARRAYS PRINT 20 constantly
    // RUNNER POSITION ARRAY [0] == 0 [1] == 380 but changes on jump
    // RUNNER POSITION ARRAY[1] would need updated when runner is in between of the platform object
    // Left side of object is positionArray[0] right side is positionArray[0] plus [1] ?
    isStandable(ObstacleEntity) {
      if (this.positionArray[0] > ObstacleEntity.positionArray[0] &&
          this.positionArray[0] < ObstacleEntity.positionArray[0] + ObstacleEntity.positionArray[1]  + this.positionArray[0]) { // comp x coords, this.positionArray[0] for offset
            if (this.positionArray[1] < ObstacleEntity.positionArray[1]) { // checks runner's y coord against platforms y coord
              this.positionArray[1] = ObstacleEntity.positionArray[1] - ObstacleEntity.collisionArray[1];
              this.platformJump(ObstacleEntity);
            }
      }
    }

    platformJump(ObstacleEntity) {
        if (keyIsDown(32) && this.positionArray[1] + this.collisionArray[1] >= height - ObstacleEntity.collisionArray[1]) {
            this.velocity = -25 - this.collisionArray[1] - ObstacleEntity.collisionArray[1];
            keyCode = DOWN_ARROW;
        }
        this.positionArray[1] += this.velocity;
        if (!this.velocity == 0) {
          this.velocity += .2; // .2 for more fluid movement /= 1.2 was too rigid
        }

   }

    show() {
      // show image
      image(this.spriteImage, this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);
      // fill(51);
      // rect(this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);
      
      if(showHitboxes) {
        noFill();
        rect(this.positionArray[0], this.positionArray[1], this.collisionArray[0], this.collisionArray[1]);
      }
        
      // for jumping
      if(this.positionArray[1] + this.collisionArray[1] < height) {
        this.positionArray[1] += this.gravity;
      }  
      
      this.positionArray[1] += this.velocity;//?? i have no clue what this does.
      this.velocity /= 1.2;
      
      // spacebar jump
      if(keyIsDown(32) && this.positionArray[1] + this.collisionArray[1] >= height) {
          this.velocity = -50;
          keyCode = DOWN_ARROW;
      }
    }
}