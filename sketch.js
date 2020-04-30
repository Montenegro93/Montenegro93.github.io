let img1 , img2; // Declare variable 'img'.
let flip = true;
let changeSize = false;


function preload(){

  img1 = loadImage('tsne_all_v5.png'); // Load the image
  img2 = loadImage('tsne_grid_all_v5.jpg'); // Load the image

}

function setup() {
  createCanvas(3000, 3000);
  frameRate(24)
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
 
}

function keyPressed(){



  if(key == 'c'){
    changeSize = !changeSize
  }

  if(key =='x'){
    flip = !flip;

  }
}