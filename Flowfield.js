

class Flowfield {

  constructor(scl){
    this.scl = scl
    this.cols = floor(width / scl);
    this.rows = floor(height / scl);

    this.flowfield = new Array(this.cols * this.rows);

    this.zOff = 0;
    this.yOff = 0;
    this.xOff = 0;
    this.xInc = 0.001;
    this.YInc = 0.001;
    this.zInc = 0.00001;

  }


update(){


  for( let y = 0 ; y < rows ; y++ ) {

    for( let x = 0 ; x < cols ; x ++ ) {

      let index = x + y * cols;
      let angle = noise(this.xOff,this.yOff,this.zOff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);

      this.flowfield[index] = v;

      this.xOff += this.xInc


    }
    this.yOff += this.yInc;
    this.zOff += this.zInc;
  }



  }
display(){
  //DRAW VECTOR
        push();
        stroke(0,50);
          translate(x*scl,y*scl);
          rotate(v.heading());
          line(0,0,scl,0);
        pop();
}

}
