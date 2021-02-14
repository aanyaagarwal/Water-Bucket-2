var bucket; 
var Background;
var grassImage;
var pool

function setup() {
  createCanvas(displayWidth, displayHeight);
  Background = createSprite(0, 0, 800, 400);
  Background.addImage(grassImage);
  Background.x = Background.width/2;
  Background.scale = 4;
  
  bucket = createSprite(100, 100, 20, 20)
  bucket.addImage(bucketImage);
  bucket.scale = 0.5;

  pool = createSprite(400, 400, 10, 10);
  pool.addImage(poolImage);
  pool.scale = 0.5;
  }

function preload(){
  grassImage = loadImage("Images/Grass.jpg");

  bucketImage = loadImage("Images/Bucket_Empty.jpg");

  poolImage = loadImage("Images/Untitled.jpg")
}

function draw() {
  Background.velocityX = -3
  
  if(Background.x < 0){
    Background.x = Background.width/2;
  }

  drawSprites();
}