class Rope{

    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {

            bodyA     : bodyA,
            bodyB     : bodyB,
            pointB    : {x : this.offsetX, y : this.offsetY},
            stiffness : 0.04,
            length    : 10
    
        }
    
        this.rope = Constraint.create(options)
        World.add(world, this.rope)

    }
    display(){

        strokeWeight(3);
        line(this.bodyA.position.x + 20, this.bodyA.position.y, this.bodyB.position.x, this.bodyB.position.y)
    
    }

    }
   