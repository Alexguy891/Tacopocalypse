function Runner(y) {
    this.x = 0;
    this.y = y;
    this.w = 50;
    this.h = 50;

    this.show = function() {
        fill(100);
        stroke(50);
        rect(this.x, this.y, this.w, this.h)
    }
}