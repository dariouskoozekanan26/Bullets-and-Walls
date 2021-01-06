var wall, thickness;
var bullet,speed,weight;
function setup() {
  height = 400;
  createCanvas(1600,height);
  speed=random(55,90);
  weight=random(400,1500);
  bullet = createSprite(50, 200,50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30, 52);
  
}

function draw() {
  background("black");  
   
  
  car.velocityX = speed;
  if(wall.x-bullet.x<(bullet.width/2+wall.width/2))
  {car.velocityX=0;

    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100);
    {
    bullet.shapeColor=color(230,230,0);
    } 
    if(deformation<100)
    {
    bullet.shapeColor=color(0,255,0);
    } 
    bullet.x=wall.x-(bullet.width/2+bullet.width/2);
  }
  
  drawSprites();
}