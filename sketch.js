
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime;
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,325);
  
  monkey=createSprite(80,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,300,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
 
}


function draw() {
background("white");
  
  stroke("white");
  textSize(10);
  fill("white");
  text("SURVIVAL TIME:"+score,500,50);
  
  stroke("black");  
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  if (keyDown("space")&&monkey.y>=100){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    bananaGroup.x=600;
     obstacleGroup.setLifetimeEach(-1);
     bananaGroup.setLifetimeEach(-1);
    monkey.setVelocityX=0;
    
    
  }
  
  
  
  
  Food();
  obstacle();
  drawSprites();
}

function Food(){
  if (frameCount%80===0){
    var banana=createSprite(600,275,10,10);
    banana.y=Math.round(random(120,200))
    banana.velocityX=-6;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=100;
    bananaGroup.add(banana);
  }  
}
function obstacle(){
  if (frameCount%300===0){
    var obstacle=createSprite(600,276,10,10);
    obstacle.x=Math.round(random(599,600));
    obstacle.velocityX=-6;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }

}