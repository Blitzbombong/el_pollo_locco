class Coins extends MovableObject {
    
    y = 300;
    x = 200;

    constructor() {
        super().loadImage('img/8_coin/coin_2.png')

        this.x = 200 + Math.random() * 500; 
        this.y = 100 + Math.random() * 200;
    }
}