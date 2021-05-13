class Trash {
  constructor(){
    this.r = 50;
    this.x = 0 - this.r;
    this.y = random(400, 500);
  }

  display(){
    //plastic bottle images
    let frameIndex=(int)(frameCount*0.05) % 4;
    image(trashAnimation[frameIndex], this.x, this.y, this.r, this.r);
  }

  move(){
    this.x++;
  }

}
