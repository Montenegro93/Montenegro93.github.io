let scl = 60; //SLIDER?
let inc = 0.001; // BETWEEN 0.01 & 0.1
let numOfP = 2000;
let rows,cols;
let fr;
let particules = [];
let flowfield = [];
let zoff = 0;



function setup() {

  createCanvas(windowWidth,windowHeight);


  cols = floor(width / scl);
  rows = floor(height / scl);



flowfield = new Array(cols * rows);

    //PARTICULES SPAWNER
    for( let i = 0 ; i < numOfP   ; i++  ){
      let p = new Particules(random(width),random(height));
      particules.push(p);
    }

}

function draw() {
  //background(255);


  let yoff = 0;
  for( let y = 0 ; y < rows ; y++ ) {
    let xoff = 0;

    for( let x = 0 ; x < cols ; x ++ ) {

      let index = x + y * cols;
      let angle = noise(xoff,yoff,zoff) * TWO_PI * 8 ;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.2);

      flowfield[index] = v;

      xoff += inc;
//DRAW VECTOR
      // push();
      // stroke(0,50);
      //   translate(x*scl,y*scl);
      //   rotate(v.heading());
      //   line(0,0,scl,0);
      // pop();

    }
    yoff += inc;
    zoff += 0.0003; //BETWEEN 0.0001 & 0.001
  }

  //FUNCTION APPLIED TO Particules
  for(let p of particules){
    p.follow(flowfield);
    p.update();
    p.warparound();
    p.display();


  }

}
