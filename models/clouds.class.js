class Clouds extends MovableObject {

    width = 500;
    height = 400;
    x = 20;
    y = 20;

    constructor(imagePath) {
        super().loadImage(imagePath);

        this.x = 0 + Math.random() * 500;
    }
}