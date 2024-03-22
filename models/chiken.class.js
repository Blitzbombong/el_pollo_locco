class Chicken extends MovableObject {

    width = 70;
    height = 70;
    x = 100;
    y = 360;
    IMAGE_WALKING = [
            'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
            'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
            'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    

    constructor(){
        super().loadImage(this.IMAGE_WALKING[0]);
        this.loadImages (this.IMAGE_WALKING);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animateChiken();
    }

    animateChiken(){
        setInterval( () => {
            this.x -= 0.15;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGE_WALKING);
        }, 200);
    }
}