//const de constante
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var caixa;
var passaro;
var tronco;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     
       


    ground = Bodies.rectangle(200,390,1200,10,{isStatic: true});
    World.add(world,ground);

    caixa = new Caixa (600,300,50,50)

    passaro = new Passaro_maneiro (250,250);

    tronco = new Tronco(600, 200, 75, PI/2);
    
}

function draw(){
    background(0);
    Engine.update(engine);

    caixa.display();
    
    passaro.display();

    tronco.display();

    rectMode(CENTER);
    fill("brown")
    rect(ground.position.x,ground.position.y,1200,20);

}