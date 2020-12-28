class Plinko {

        constructor(x,y){
        
            var options = {
                'isStatic':true,
                
            }
        
            this.body = Bodies.circle(x, y,10, options);
            this.radius=this.body.circleRadius
            World.add(world, this.body);
        
        
        
        }
        
        
        display(){
        
        
            
            ellipseMode(CENTER)   
            fill ("white")
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius )
            
        
        }
        
        
        
        
        
        



























}