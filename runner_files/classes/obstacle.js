ObstacleList = [];
class ObstacleEntity extends Entity {
    constructor(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, hasCollision, isMovable, scrollSpeed, lifeDamage) {
        super(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, true, false);

        // speed of scroll across screen
        if(scrollSpeed <= 0) {
            scrollSpeed = 1;
            console.log("Invalid scrollSpeed passed to ObstacleEntity.");
        }
        this.scrollSpeed = scrollSpeed

        // lives taken from collision
        if(lifeDamage < 0) {
            lifeDamage = 0;
            console.log("Invalid lifeDamage passed to ObstacleEntity.")
        }
        this.lifeDamage = lifeDamage;
      ObstacleList.push(this);
    }

    show() {
        // show image
      
        image(this.spriteImage, this.positionArray[0], this.positionArray[1], this.sizeArray[0], this.sizeArray[1]);
      //this.positionArray[0] -= this.scrollSpeed;
        // speed
        
      if (this.positionArray[0] + this.sizeArray[0] >= 0) {
            this.positionArray[0] -= this.scrollSpeed;
        }//NOTE: THIS IF IS NOT NEEDED. there is no way to delete an object in js, i think, so this is just a pointless check in here for legacy reasons.
    }
}