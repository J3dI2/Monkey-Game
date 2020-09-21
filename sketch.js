var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var scoreAlive = 0;
var scoreBanana = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  
  createCanvas(600, 400);
  
  ground = createSprite(500,350,1200,10);
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  
  background("green");
  stroke("black");
  textSize(20);
  fill("black");
  scoreAlive = Math.round(frameCount/frameRate())
  text("Alive Time: "+scoreAlive,250,50);
  console.log(monkey.y);
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >283) {
        monkey.velocityY = -12;
        //jumpSound.play();
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  ground.velocityX =-4;

  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  createbanana();
  createobstacle();
  monkey.collide(ground);
  
  drawSprites();
}

function createbanana() {
  if(frameCount%80===0) {
    banana = createSprite(600,Math.round(random(120,200)),10,10);
    banana.velocityX = -4;
    banana.lifetime=150
    banana.addImage(bananaImage);
    banana.scale=0.1;
    FoodGroup.add(banana);
    return banana;
  }
}
function createobstacle() {
  if(frameCount%100===0){
    obstacle = createSprite(600,315,10,10);
    obstacle.velocityX = -4;
    obstacle.lifetime=150
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    obstacleGroup.add(obstacle);
    return obstacle;
  }
}



