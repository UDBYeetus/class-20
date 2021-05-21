var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(100, 100, 50, 50);
  movingRect.shapeColor = "yellow"
}

function draw() {
  background(0,0,0); 
  
  movingRect.x = World.mouseX;

  drawSprites();
}