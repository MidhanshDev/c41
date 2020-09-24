const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var drops = [];
var umbrella;

function preload(){
  
}

function setup(){
canvas = createCanvas(300,800);
engine = Engine.create();
world = engine.world;

umbrella = new Umbrellas(70,450,46);
lightning = new Lightning(200,100,50);

}


function draw(){
background(0);
Engine.update(engine);
umbrella.display();

if(frameCount% 1 === 0){
   drops.push(new Drops(random(0,400),10,3));
   }
   for(var j = 0; j <drops.length; j++){
     drops[j].display();
     }

if(keyWentDown("l")){
  lightning.display();
}
/*if(keyWentUp("l")){
   lightning.display();
 }*/


}