function Obstacle(w, h) {
    this.x = w;
    this.y = h / 2;
    this.rx = random(5);

    this.show = function() {
        // draw rectangles
        stroke(50);
        fill(100);
        rect(this.x, this.y, 120, 40);

        // speed
        this.x = this.x - this.rx;

        // reset to the right side of screen with a random speed
        if (this.x < -120) {
            this.rx = random(5);
            this.x = width;
        }
    }
}