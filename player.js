class Player {
  constructor() {
    this.isHit = false
    this.size = 50;
    this.x = 50;
    this.y = height - this.size;
    this.vy = 0;
    this.gravity = 1.5;
    this.lives = 3;
  }
  
  jump() {
    if(this.y == height - this.size) {
      this.vy = -20;
    }
  }
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity
    this.y = constrain(this.y, 0, height - this.size)
    
  }
  
  show() {
    rect(this.x, this.y, this.size, this.size)
  }
  
  hits(zombie) {
    if(!this.isHit) {
    return collideLineRect(zombie.x, height, zombie.x + zombie.size / 2, zombie.y, this.x, this.y, this.size, this.size);
    } else {
      return 
    }
  }
}
