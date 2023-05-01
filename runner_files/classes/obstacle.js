// for showing obstacle hitboxes
showHitboxes = false;

class ObstacleEntity extends Entity {
    constructor(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, scrollSpeed, lifeDamage) {
        super(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, true, false);
      
        // speed of scroll across screen
        this.scrollSpeed = scrollSpeed;

        // lives taken from collision
        this.lifeDamage = lifeDamage;
        
        // for squished checking
        this.squished = false;
    }

    // shows obstacle
    show() {
        // show image
        image(this.spriteImage, this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);
    
        // for hitbox debugging
        if(showHitboxes) {
            noFill();
            rect(this.positionArray[0], this.positionArray[1], this.collisionArray[0], this.collisionArray[1]);
        }

        // speed of scroll across screen
        if (this.positionArray[0] + this.sizeArray[0] >= 0) {
                this.positionArray[0] -= this.scrollSpeed;
            }
        }
}