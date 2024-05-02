class SalsaBottle extends MovableObject {

    constructor(){
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');

        this.x = 200 + Math.random() * 500; 
        this.y = 100 + Math.random() * 200;
    }
}