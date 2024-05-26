class Coins extends MovableObject {
    offset = {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
   }
    y = 300;
    x = 2500;
    IMAGE_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ]

    constructor() {
        super().loadImage('img/8_coin/coin_1.png' )
        this.loadImages(this.IMAGE_COIN);

        this.x = 200 + Math.random() * 2001; 
        this.y = 100 + Math.random() * 200;

        this.animate();
    }

    animate() {

        setInterval(() => {
            let i = this.currentImage % this.IMAGE_COIN.length; // let i = 7 % 6; => 1. Rest 1
            // i = 0, 1, 2, 3, 4, 5, , 0, 1 .... wiederholt die Zahlen von 0 bis 5
            let path = this.IMAGE_COIN[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 300);  
    }
}