const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,590,1200,20)
    hammer = new Hammer(10,100);
    stone1= new Stone(500, 590, 50, 50 )  
    iron= new Iron(400, 590, 40, 50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   stone1.display();
    iron.display();

    
 
}