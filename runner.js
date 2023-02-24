function Runner(y, w, h) {
    this.x = 0;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.velocity = 0;
    this.gravity = 5;
  
    this.show = function() {
        fill(100);
        stroke(50);
        rect(this.x, this.y, this.w, this.h)
        
        if(this.y + this.h < h) {
          this.y += this.gravity;
        }  
      
        this.y += this.velocity;
        this.velocity /= 1.2;
    
        if(keyIsDown(RIGHT_ARROW) && this.x < w - this.w) {
            this.x += 3;
        } else if(keyIsDown(LEFT_ARROW) && this.x > 0) {
            this.x -= 3;
        }
        
        if(keyIsDown(UP_ARROW) && this.y + this.h >= h) {
            this.velocity = -25;
            keyCode = DOWN_ARROW;
        }
    }
}