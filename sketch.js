var c,c1,c2,c3,c4;
var m,m1,m2,m3,m4;
var background1, bg1;
function preload() {
  c1 = loadAnimation("cat1.png");
  c2 = loadAnimation("cat2.png","cat3.png");
  c3 = loadAnimation("cat4.png");
  m1 = loadAnimation("mouse1.png");
  m2 = loadAnimation("mouse2.png","mouse3.png");
  m3 = loadAnimation("mouse4.png");
  bg1 = loadImage("garden.png")
}

function setup(){
    createCanvas(900,400);

    background1 = createSprite(450,200,400,400);
    background1.addImage("bg",bg1);

    c = createSprite(750,330,20,20);
    c.addImage("cimg",c1);
    c.scale = 0.1;

    m = createSprite(170,330,20,20);
    m.addAnimation("mimg",m1);
    m.scale = 0.1;

    
}

function draw() {
    background("black");
    
    keyPressed();

    drawSprites();
}


function keyPressed(){
      if(keyDown("LEFT_ARROW")){ 
      m.changeAnimation("mimg",m2);
  
   }


}
