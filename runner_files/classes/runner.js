var score = 0;
var lastHit = 0; //stores second, minute for hit detection

class RunnerEntity extends Entity {
    constructor(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, moveSpeed, livesAmount) {
        super(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, true, true);

        // status
        this.dead = false;

        // lives before reset
        this.livesAmount = livesAmount;

        // for jumping
        this.velocity = 0;
        this.gravity = 5;
    }

    // loss of lives
    collision(ObstacleEntity) {
        if (
          (ObstacleEntity.positionArray[0] + ObstacleEntity.collisionArray[0] >= this.positionArray[0]) &&
(ObstacleEntity.positionArray[0] <= this.positionArray[0] + this.collisionArray[0]) &&
(ObstacleEntity.positionArray[1] + ObstacleEntity.collisionArray[1] >= this.positionArray[1]) &&
(ObstacleEntity.positionArray[1] <= this.positionArray[1] + this.collisionArray[1]) && (lastHit + 20 <= score)) {
            this.livesAmount -= ObstacleEntity.lifeDamage;
          lastHit = score;
          
        }  
        if (this.livesAmount <= 0) {//todo: on death, stop counting score and 
            this.dead = true;
          print("player death")
        }
    }
    
    show() {
      // show image
      image(this.spriteImage, this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);
      // fill(51);
      // rect(this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);

      //basic hud
      text('lives: '+ this.livesAmount, 10, 30);
      score += (second() / 100)
      text('score: '+ round(score), 10, 50);
        
      // for jumping
      if(this.positionArray[1] + this.collisionArray[1] < height) {
        this.positionArray[1] += this.gravity;
      }  
      this.positionArray[1] += this.velocity;//?? i have no clue what this does.
      this.velocity /= 1.2;
      
      // spacebar jump
      if(keyIsDown(32) && this.positionArray[1] + this.collisionArray[1] >= height) {
          this.velocity = -25;
          keyCode = DOWN_ARROW;
      }
    }
}