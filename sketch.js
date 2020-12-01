var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed; 
  wall = createSprite(1000,200,20,70);
 
  
}

function draw() {
  background(255,255,255); 
  if (wall.x-car.x<wall.width/2+car.width/2){
    car,velocityX = 0;
    var deformation=0.5*weight*speed*speed/22509;
    if (deformation>180){
      car.shapecolor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car.shapecolor=color(230,230,0);
    }
    if (deformation<100){
    car.shapecolor=color(0,255,0);
    }
  }
  drawSprites();
}