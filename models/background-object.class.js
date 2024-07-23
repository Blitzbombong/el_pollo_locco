class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;

  constructor(imagePath, y, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
