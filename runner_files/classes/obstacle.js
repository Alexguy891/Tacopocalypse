ObstacleList = [];
class ObstacleEntity extends Entity {
    constructor(posX, posY, collisionHeight, collisionWidth, sizeHeight, sizeWidth, spritePath, scrollSpeed, lifeDamage) {
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

    genRandObstacle(OBSTACLE_POS_X, OBSTACLE_POS_Y) {
      // randomly generate type of obstacle
      this.posX = OBSTACLE_POS_X;
      this.posY = OBSTACLE_POS_Y;
      obstaclePick = random(0,2);
      switch(obstaclePick) {
          case 0:
              // Rubble
              this.collisionHeight = 35;
              this.collisionWidth = 35;
              this.sizeHeight = 35;
              this.sizeWidth = 35;
              this.spritePath = "runner_files/assets/test_obstacle.jpg";
              this.scrollSpeed = 5;
              this.lifeDamage = 1;
              break;
          case 1:
              // Wall
              this.collisionHeight = 50;
              this.collisionWidth = 10;
              this.sizeHeight = 50;
              this.sizeWidth = 10;
              this.spritePath = "runner_files/assets/test_obstacle.jpg";
              this.scrollSpeed = 5;
              this.lifeDamage = 1;
              break;
          case 2:
              // Spike Pad
              this.collisionHeight = 20;
              this.collisionWidth = 60;
              this.sizeHeight = 20;
              this.sizeWidth = 60;
              this.spritePath = "runner_files/assets/test_obstacle.jpg";
              this.scrollSpeed = 5;
              this.lifeDamage = 1;
              break;
          default:
              break;
      }
    }
}