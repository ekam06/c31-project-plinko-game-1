class Particle{

constructor(x,y){

 var options={

'isStatic':false,
'restitution':0.5,
'frictionAir':0.005,
'density':1
}
this.particle=Bodies.circle(x,y,15,options)
this.radius=this.particle.circleRadius
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.particle)



}


display(){

    var pos=this.particle.position

ellipseMode(CENTER)
colorMode (RGB)
fill (this.color)
ellipse(pos.x,pos.y,this.radius,this.radius)




}










}