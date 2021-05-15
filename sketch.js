// variables 
var dog, happyDog, database, foodS, foodStock,dogImg1,dogImg;

function preload()
{
dogImg=loadImage("images/dogImg.png");
dogImg1=loadImage("images/dogImg1.png");
}

function setup() {
  database= firebase.database();
	createCanvas(500, 500);
  background("white");
  //creating sprites
    dog=createSprite(250,250,20,20);
    dog.addImage(dogImg);
    dog.scale=0.15;
    foodStock= database.ref('Food');
    foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogImg1);
    }
  drawSprites();
  //add styles here
    textSize(13);
    fill("black");
    stroke("black");
    text("Note:Press UP_ARROW key to feed drago milk",130,10,300,20);
  }

function readStock(data){
  foodS=data.val();
}
function writeStock(x,y){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref("/").update({
     Food : x
  })
}

