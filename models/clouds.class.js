class Clouds extends MovableObject {
  width = 700;
  height = 500;
  x = 20;
  y = 2;

  constructor(imagePath, x) {
    super().loadImage(imagePath);

    this.x = x;
    this.y = 10;
    this.width = 500;
    this.height = 400;

    this.speed = 0.15;

    this.animate();
  }

  animate() {
    setInterval(() => this.moveLeft(), 1000 / 60);
  }
}
