
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground; 
var inground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() 
{
  createCanvas(600,600);
    ground=createSprite(300,550,1200,20);
  ground.velocityX=-2 ;
  monkey=createSprite(100,350);
  monkey.addAnimation("runing",monkey_running);
  monkey.scale=0.2;
  inground=createSprite(300,567,1200,20);
  inground.velocityX=0;

  FoodGroup=new Group()
  obstacleGroup=new Group()

}
function draw() 
{
  background("lightblue");
  text("survial time : "+score,10,15)
  score=score+1;
  if(ground.x<0)
    {
     ground.x=300;
    }
   ground.debug=true;
  monkey.debug=true;
    monkey.velocityY=monkey.velocityY+0.8;
  if(keyDown("space")&&monkey.isTouching(ground))
     {
       monkey.velocityY=-12;      
     }
  
  banana1();
  console.log(monkey.y);
  monkey.collide(inground);
  drawSprites(); 
  obs1();
}
function banana1()
{
  if(frameCount%80===0)
    {
  banana=createSprite(610,Math.round(random(300,385)),10,10);
  banana.velocityX=-2;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.lifetime=300;
  FoodGroup.add(banana);
    }
}
function obs1()
{
  if(frameCount%200===0)
    {
  obstacle=createSprite(610,520,10,10);
  obstacle.velocityX=-8;
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.1;
  obstacle.lifetime=75;
  obstacleGroup.add(obstacle);
    }
}