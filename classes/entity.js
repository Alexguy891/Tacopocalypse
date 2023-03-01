class Entity {
    constructor(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, hasCollision, isMovable) {
        // position coordinates
        this.positionArray = [posX, posY];

        // collision size
        this.collisionArray = [collisionHeight, collisionWidth];

        // image size
        this.sizeArray = [sizeHeight, sizeWidth];

        // load sprite image
        this.spriteImage = loadImage(spritePath);

        // for collision checking
        this.hasCollision = hasCollision;

        // for movement checking
        this.isMovable = isMovable;
    }
}