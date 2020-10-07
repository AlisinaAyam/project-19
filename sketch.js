var PLAY = 1;
var DANGER = 2
var END = 0;
var gameState = PLAY;
var monkey,monkeyimg;
var ground;
var background,backgroundimg;
var bananagroup,bananaimg;
var obstaclesGroup,obstacleimg;

function preload(){
 monkey = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
"Monkey_05.png","Monkey_06.png","Monkey_07,png","Monkey_08.png","Monkey_09.png",
"Monkey_10.png"); 
backgroundimg = loadImage("jungle.jpg");  
bananaimg = loadImage("banana.png"); 
obstacleimg = loadImage("stone.png");
}




function setup() {
createCanvas(400, 400);
background = createSprite(200,200,10,10);
background.addImage("jungle",backgroundimg);
background.x = background.width /2;
monkey = createSprites(20,350,20,50);
monkey.addAnimation("walk",monkeyimg);
monkey.scale =0.2;
ground = createSprite(200,390,400,10);
ground.x = ground.width /2;
ground.visible = false;
bananagroup = new Group(); 
obstaclesGroup = new Group();
}

function draw() {
background(220);
if(gameState===PLAY){  

 if(keyDown("space")) {
    monkey.velocityY = -10;
 }  
monkey.velocityY = menkey.velocityY + 0.8  

if (background.x < 0){
background.x = background.width/2;
}  
  
  
  
ground.velocityX =-3;  
if (ground.x < 0){
ground.x = ground.width/2;
}

monkey.collide(ground);
 if(monkey.isTouching(bananagroup)){
  score = score+2;
  bananagroup.destroyEach();
 }
  
switch(score){
    
  case 10: monkey.scale=0.12;
  break;
  case 20: monkey.scale=0.14;
  break;
  case 30: monkey.scale=0.16;
  break;
  case 40: monkey.scale=0.18;
  break;
  default:
  break;
}
  
spawnBananas();  
spawnObstacles();
 if(obstaclesGroup.isTouching(monkey)){
gameState = DANGER;


  }
}
else if(gameState === DANGER){
 monkey.scale=0.2
if(monkey.isTouching(obstacleGroup)){
  gameState = END;
}
  
} 
  else if(gameState === END) {
   
ground.velocityX = 0;
monkey.velocityY = 0;
obstaclesGroup.setVelocityXEach(0);
bananagroup.setVelocityXEach(0);   
     
 //set lifetime of the game objects so that they are never destroyed
obstaclesGroup.setLifetimeEach(-1);
bananagroup.setLifetimeEach(-1);     
     
     
     
   }    
     
     
     
     
     
     
     
     
     
     
drawSprites();
text("Score: "+ score, 500,50);
}

function spawnBananas(){

if(frameCount%100 === 0){
//spawn the bananas
var banana=createSprite(400,320,20,20);
banana.addImage(bananaimg);
banana.y = Math.round(120,200);
banana.scale=0.05;
//assigning velocity to the bananas
banana.velocityX=-3;
banana.setLifetime = 134;
bananagroup.add(banana);
}     
}

function spawnObstacles() {
  if(frameCount % 250 === 0) {
    var obstacle = createSprite(400,390,20,20);
    obstacle.velocityX = -4;
obstacle.addImage(obstacleimg);
obstacle.setLifetime = 134;

 //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.05;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);

  }
  }











