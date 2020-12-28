const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body

var engine,world

var plinko=[]
var particles=[]

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(700,700);


baseground=new Ground(350,680,700,20)



division1=new Ground(0,510,5,330)
division2=new Ground(100,510,5,330)
division3=new Ground(200,510,5,330)
division4=new Ground(300,510,5,330)
division5=new Ground(400,510,5,330)
division6=new Ground(500,510,5,330)
division7=new Ground(600,510,5,330)
division8=new Ground(700,510,5,330)

for (i=15;i<=width-10;i=i+50){

  plinko.push(new Plinko(i,50))
}

for (i=40;i<=width-10;i=i+50){

  plinko.push(new Plinko(i,120))
}

for (i=15;i<=width-10;i=i+50){

  plinko.push(new Plinko(i,190))
}
for (i=40;i<=width-10;i=i+50){

  plinko.push(new Plinko(i,260))
}
for (j=0;i<=width-10;j=j+40){

  particles.push(new Particle(j,10))
}


}

function draw() {
  Engine.update(engine)

  rectMode(CENTER)
  background("black");  

fill ("white")
text (mouseX+ "," +mouseY,mouseX,mouseY)

if(frameCount%90===0){
  
  particles.push(new Particle(random(0,700),0))
  }
  baseground.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
  division8.display()
   
for(var i=0;i<plinko.length;i++){

  plinko[i].display()
}

for(var j=0;j<particles.length;j++){

  particles[j].display()
}
}