class Iron{
    constructor(x, y, width, height){
        var option={
        restitution:1    
        }
this.body=Bodies.rectangle(x, y, width, height, option) 
World.add(world,this.body )
this.width=width
this.height=height
    }
display(){
var angle= this.body.angle
var pos=this.body.position

push ()
fill ("red")
strokeWeight(3)
stroke("yellow")
translate (pos.x, pos.y)
rectMode(CENTER)
rotate(angle)
    rect(0, 0,this.width, this.height )
    pop ()

}
}
