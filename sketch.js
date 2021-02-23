var movingRect;
var sRect;

function setup() {
  createCanvas(800,400);
    movingRect = createSprite(400, 200, 100, 50);
    sRect = createSprite(400,100,50,100);
   movingRect.shapeColor = "red"
   sRect.shapeColor = "blue"
}

function draw() {
  background("yellow");  
   movingRect.x = mouseX;
   movingRect.y = mouseY
   if(movingRect.x-sRect.x<movingRect.width/2+sRect.width/2&&sRect.x-movingRect.x<movingRect.width/2+sRect.width/2
    &&movingRect.y-sRect.y<movingRect.height/2+sRect.height/2&&sRect.y-movingRect.y<movingRect.height/2+sRect.height/2){
     movingRect.shapeColor = "purple"
     sRect.shapeColor = "purple"
 
   } else{
    movingRect.shapeColor = "red"
    sRect.shapeColor = "blue"
   }

  drawSprites();
}