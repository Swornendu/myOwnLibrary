
function isTouching(Object1,Object2){
  if(Object1.x-Object2.x<Object2.width/2 + Object1.width/2 && Object2.x-Object1.x<Object2.width/2 + Object1.width/2 && Object1.y-Object2.y<Object2.width/2 + Object1.width/2 && Object2.y-Object1.y<Object2.width/2 + Object1.width/2){
    return true;
  }
  else{
    return false;
  }
}

function bounceOff(Object1,Object2){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
}