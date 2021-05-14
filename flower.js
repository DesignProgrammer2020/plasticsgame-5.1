class Flower {

  constructor() {
    let this.x = random(width);
    let this.y = random(height * 0.55, height * 0.7);
    let this.s = random(10, 20);
    let this.c = random(255), random(255), random(255);
  }

  display(){
    fill(this.c);
    ellipse(this.x - this.s / 2, this.y - this.s / 2, this.s);
    ellipse(this.x + this.s / 2, this.y - this.s / 2, this.s);
    ellipse(this.x - this.s / 2, this.y + this.s / 2, this.s);
    ellipse(this.x + this.s / 2, this.y + this.s / 2, this.s);

    fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, this.s);
  }


}
