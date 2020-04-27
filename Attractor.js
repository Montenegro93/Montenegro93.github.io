class Attractor{

constructor(x,y){
  this.acc = createVector(0,0);
  this.vel = createVector(0,0);
  this.pos = createVector(x,y);
 
  this.x = 0;
  this.y = 10000;

}

update(){

this.acc = createVector(noise(this.x),noise(this.y));
this.acc.mult(random(-10,10));
this.acc.mult(1);
this.vel.add(this.acc);
this.vel.limit(3);
this.pos.add(this.vel);
this.acc.mult(0);
this.x+= 0.4;
this.y+= 0.4;

}




warparound(){
  if(this.pos.x + 0.5*this.size < 0) this.pos.x = width;
  if(this.pos.x - 0.5*this.size > width) this.pos.x = 0;
  if(this.pos.y + 0.5*this.size < 0) this.pos.y = height;
  if(this.pos.y -0.5*this.size > height) this.pos.y = 0;
}

}
