class Clouds extends MovableObject {

    width = 500;
    height = 400;
    x = 20;
    y = 20;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = 0 + Math.random() * 500;
    }
}