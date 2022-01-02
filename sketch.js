
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img;
var alienImg,alien;
var astronaut,happyAstronaut,displayAstro;
var ufo;
var engine,world;


function preload(){
  bg_img = loadImage('spaceBackground.webp');
  alien_img = loadImage('alien.png');
  astronaut = loadImage('astronaut.png');
  ufo = loadImage('emptyUfo.png');
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(900,400);


  alien = Bodies.rectangle(500,505,400,400);
  World.add(engine.world,alien)

  astronaut = createImg('astronaut.png');
  astronaut.position(40,245);
  astronaut.size(115,140);
  astronaut.mouseClicked(airblower)

  ufo = Bodies.rectangle(50,505,400,400);
  World.add(engine.world,ufo)
}


function draw() 
{
  background(51);

  Engine.update(engine);
  image(bg_img,0,0,width,height);

  image(alien_img,alien.position.x,alien.position.y,50,245)

  // if(collide(alien,ufo,300) == true){
  //   //alien.visible = false;
    
  //   fill(0);
  //   stroke("white");
  //   textSize(25);
  //   text("The Alien has been defeated!",40,40);
  // }
  drawSprites();
}

  
  



function airblower(){
  Matter.Body.applyForce(alien,{x:0,y:0},{x:-0.03,y:0});
}

function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}

