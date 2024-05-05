class Clouds extends MovableObject {

    width = 700;
    height = 500;
    x = 20;
    y = 2;

    constructor(imagePath) {
        super().loadImage(imagePath);

        this.x = 0 + Math.random() * 500; // Zahl zwischen 200 und 700

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;
            if (this.x < -this.width) {

                this.x = 0 + Math.random() * 700;
            }
            
        }, 1000 / 60);
    }
}