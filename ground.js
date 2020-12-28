class Ground {

constructor(x,y,width,height){

    var o={

 'isStatic':true

    }
this.height=height
this.width=width
this.body=Bodies.rectangle(x,y,this.width,this.height,o)

World.add(world,this.body)
}
display(){
var pos=this.body.position

rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)

}




}