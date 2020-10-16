var car,wall
var speed,weight
var thickness
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  thickness=random(22,83)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX=speed
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500
    if(deformation<180){
      car.shapeColor="red"
    }
    if(deformation>180){
      car.shapeColor="green"
    }
    
  }
}