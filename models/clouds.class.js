class Clouds extends MovableObject {
  width = 200;
  height = 300;
  y = 40;
  speed = 0.15;

  constructor(imagePath) {
    super().loadImage(imagePath);

    this.x = 200 + Math.random() * 3000;

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
