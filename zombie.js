class Zombie {
  constructor() {
    this.size = 50;
    this.x = width
    this.y = height - this.size;
    this.speed = 5;
  }
  
  move() {
    this.x -= this.speed;
  }
  
  show() {
    triangle(this.x, height, this.x + this.size / 2, this.y, this.x + this.size, height)
  }
}
