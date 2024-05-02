class Clouds extends MovableObject {

    width = 700;
    height = 500;
    x = 20;
    y = 2;

    constructor(imagePath) {
        super().loadImage(imagePath);

        this.x = 0 + Math.random() * 500;
    }
}