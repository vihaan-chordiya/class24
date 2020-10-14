class Pig{
    constructor(x,y){
        var options={
            restitution:0.1
        }
        this.body=Bodies.rectangle(x,y,50,50,options)
        this.width=50
        this.height=50
        World.add(ourWorld,this.body)
    }
    display(){
        var position=this.body.position
        var angle=this.body.angle
        push();
        strokeWeight(4);
        stroke("white")
        translate(position.x,position.y)
        rotate (angle)
        rectMode(CENTER)
        fill("green")
        rect(0,0,this.width,this.height)
        pop() ;
   }
}