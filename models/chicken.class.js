class Chicken extends MovableObject {
    width = 60;
    height = 80;
    y = 345;
    speed = 10;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    chicken_sound = new Audio('audio/chiken.mp3');



    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 2500; // Plaziert die Chiken auf zufahlige Psition was das Math.random ausrechnet.
        this.speed = 0.15 + Math.random() * 0.25;
        this.chicken_sound.play();
        this.chicken_sound.volume = 0.03;

        this.animate();
    }


    animate() {
        // Walking Left
        setInterval(() => {   
            this.moveLeft();

        }, 1000 / 60);

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6; => 1. Rest 1
            // i = 0, 1, 2, 3, 4, 5, , 0, 1 .... wiederholt die Zahlen von 0 bis 5
            this.playAnimation(this.IMAGES_WALKING);

        }, 300);  
    }


}