class Particules{
//WRITE A regenerate function!!!!
constructor(x,y){
  this.acc = createVector(0,0);
  this.vel = createVector(0,0);
  this.pos = createVector(x,y);
  this.prevPos = this.pos.copy();
  this.mass = 1;
  this.maxspeed = 3;
  this.xOff = 0;
}

applyForce(f){
  // let f = force.copy();
  this.acc.add(f);

}

update(){

this.vel.add(this.acc);
this.vel.limit(this.maxspeed);
this.pos.add(this.vel);
this.acc.mult(0);

this.xOff += 0.001;


}

display(){
  noFill()
stroke(0);
strokeWeight(1);

  line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  this.updatePrev();



}

updatePrev(){
  this.prevPos.x = this.pos.x ;
  this.prevPos.y = this.pos.y ;


};

warparound(){
  if(this.pos.x  < 0){
     this.pos.x = width;
     this.updatePrev();
  }
  if(this.pos.x > width){
    this.pos.x = 0;
    this.updatePrev();

}

  if(this.pos.y < 0){
     this.pos.y = height;
     this.updatePrev();

  }

  if(this.pos.y > height){
    this.acc.mult(-1000);
    this.pos.y = 0;
    this.updatePrev();

  }
}

follow(vectors){

  let x = floor(this.pos.x / scl);
  let y = floor(this.pos.y / scl);

  let index = x + y * cols;
  let force = vectors[index];

  this.applyForce(force);

}


attraction (pos ){

let attractorPos = pos.copy() ; 


}

}
