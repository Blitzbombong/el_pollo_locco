class SalsaBottle extends DrawableObject {
  
  offset = {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  };

  constructor(x, y, img) {
    super().loadImage(img);
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 70;
    this.collectSound = new Audio("audio/cllect-bottle.mp3");
  }
}
