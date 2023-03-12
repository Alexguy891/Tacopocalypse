class RunnerEntity extends Entity {
    constructor(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spriteImage, livesAmount) {
        super(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spriteImage, true, true);

        // status
        this.dead = False;

        // lives before reset
        this.livesAmount = livesAmount;

        // for jumping
        this.velocity = 0;
        this.gravity = 5;
    }

    // loss of lives
    collision(ObstacleEntity) {
        if (ObstacleEntity.collisionArray == this.collisionArray) {
            this.livesAmount = this.livesAmount - ObstacleEntity.livesAmount;
        }
        if (this.livesAmount == 0) {
            this.dead = True;
        }
    }
    
    runnerShow() {
        // show image
        image(this.image, 0, 0, this.sizeHeight, this.sizeWidth);
        
        // for jumping
        if(this.positionArray[1] + this.collisionArray[0]) {
          this.positionArray[1] += this.gravity;
        }  
        this.positionArray[1] += this.velocity;
        this.velocity /= 1.2;
        
        // spacebar jump
        if(keyIsDown(32) && this.positionArray[1] + this.collisionHeight[0] >= height) {
            this.velocity = -25;
            keyCode = DOWN_ARROW;
        }
    }
}