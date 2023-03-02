class RunnerEntity extends Entity {
    constructor(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spriteImage, speed, playerType, livesAmount) {
        super(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spriteImage, true, true);
        
        // check speed and assign
        if(speed <= 0) {
            speed = 1;
            console.log("Invalid speed passed to PlayerEntity.");
        }
        this.speed = speed;

        // check playerType and assign
        if(playerType != 0 || playerType != 1) {
            playerType = 0;
            console.log("Invalid playerType passed to PlayerEntity.");
        }
        
        // runner or server (0 or 1)
        this.playerType = playerType;

        // lives before reset
        this.livesAmount = livesAmount;

        // for jumping
        this.velocity = 0;
        this.gravity = 5;

    }
    
    runnerShow() {
        // show image
        image(image, 0, 0, sizeHeight, sizeWidth);
        
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

        // loss of lives from collision
            // code here
    }
}