class Passaro_maneiro{

    constructor(x, y){

        this.width = 50;
        this.height = 50;

        var options = {restitution: 0.8, friction: 0.3, density: 1 }

        this.body = Bodies.rectangle(x, y, this.width, this.height, options)
        World.add(world, this.body)

    }

    display(){

        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;

        push();

       translate(pos.x, pos.y);

       rotate(this.body.angle)

        rectMode(CENTER);

        fill("red");

        rect(0, 0, this.width, this.heigth);
        
        pop();


    
    
    }


    


    



}



    












