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
    }

    show() {
        // show image
        image(image, 0, 0, sizeHeight, sizeWidth);

        // speed
        if (this.x >= 0 - this.collisionArray[0]) {
            this.positionArray[0] = this.positionArray[0] - this.scrollSpeed;
        }
    }
}