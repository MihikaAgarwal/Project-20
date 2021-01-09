var car, wall;
var speed, weight;


function setup() {
  createCanvas(1355,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50,200,50,50) ;
  car.velocityX = speed;

  car.shapeColor = color(255);

  wall = createSprite(1200,200,60,200)
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0);
  if(car.isTouching(wall)){
    
  if(wall.x - car.x < (car.width+wall.width) /2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
  }


    if(deformation>180){
        car.shapeColor = color("red");
        fill("white");
        textSize(20);
        textFont('Georgia');
        text("LETHAL",55,50);
    }
    
    if(deformation<180 && deformation>100){
        car.shapeColor = color ("yellow");
        fill("white");
        textSize(20);
        textFont('Georgia');
        text("AVERAGE",55,50);
    }

    if(deformation<100){
        car.shapeColor = color("green");
        fill("white");
        textSize(20);
        textFont('Georgia');
        text("GOOD",55,50);
    }
  }
  drawSprites();
}


