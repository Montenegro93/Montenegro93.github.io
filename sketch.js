let img1 , img2; // Declare variable 'img'.
let flip = true;
let changeSize = false;
let help = true;
let p; 

function preload(){

  img1 = loadImage('tsne_all_v5.png'); // Load the image
  img2 = loadImage('tsne_grid_all_v5.png'); // Load the image

}

function setup() {
  createCanvas(3000, 3000);
  helpDisplay();
  frameRate(30)
}

function draw() {
  // Displays the image at its actual size at point (0,0)

background(0);

 
  if(changeSize == true){
    size = 3000;
    resizeCanvas(size,size);
  }else{
    size = 600;
    resizeCanvas(size,size);

  }

  if(flip == true ){
    image(img1, 0, 0,size,size);
  }else{
    image(img2, 0, 0,size,size);

  }

  if(help == true){
    
    image(p,width/2-200, height/2-150);
  }
 
}

/*
CYCLE V0.1

Description:
TSNE representation of all my photography work. /n

The 3904 have been anlyzed and weighted by a convolutional neural network 
and then clustered by similarities. After that I used Rasterfairy to represent
the TSNE pointcloud as a grid.

more on these techniques at  : ml4a.github.io



h : display help menu
c : zoom and unzoom the image
x : switch between the grided and not grided representation
*/

function helpDisplay(){
let textElement =  [ 'Description','h : display help menu','c : zoom and unzoom the image', 'x : switch between images']
p = createGraphics(400, 300);

p.background(255,150);
p.textFont("Arial")
p.push();
p.textSize(40)
p.text('Cycle', p.width*0.35, 50);
p.pop();

p.push();
p.textSize(24);
//p.text(textElement[0],40,80);
p.pop();
p.text('TSNE representation of all my photography work.', 40, 95);
p.text('The 3904 picture have been anlyzed and weighted by a ', 40, 110);
p.text('convolutional neural networks and then clustered by ', 40,125);
p.text('similarities. After that I used Rasterfairy to represent the ', 40,140 );
p.text('TSNE pointcloud as a grid.',40,155)
p.text('more on these techniques at  : ml4a.github.io', 40,170 );

p.pop();


p.push();
p.textSize(18);
p.text(textElement[1],60,210);
p.text(textElement[2],60,240);
p.text(textElement[3],60,270);
p.pop();
}

function keyPressed(){

  if( key == 'h'){
    help = !help;
  }

  if(key == 'c'){
    changeSize = !changeSize;
  }

  if(key =='x'){
    flip = !flip;

  }
}