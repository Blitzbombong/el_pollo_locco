class Coints extends MovableObject {
  width = 70;
  height = 70;

  offset = {
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  };

  IMAGE_COIN = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  constructor() {
    super().loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.IMAGE_COIN);

    this.x = 1200 + Math.random() * 500;
    this.y = 120 + Math.random() * 200;
    this.imgAnimate();
  }

  imgAnimate() {
    setInterval(() => {
      this.playAnimation(this.IMAGE_COIN);
    }, 500);
  }
}
