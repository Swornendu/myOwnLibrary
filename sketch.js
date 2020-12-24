var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect= createSprite(400,20,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="cyan";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="orange";
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="darkblue";
  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="white";
}

function draw() {
  background(0);
  console.log(movingRect.x-fixedRect.x);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor="blue";
    gameObject4.shapeColor="blue";
  }  
  else{
    movingRect.shapeColor="green";
    gameObject4.shapeColor="green";
  }
  drawSprites();

}

