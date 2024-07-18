class Coints extends MovableObject {
  width = 70;
  height = 70;

  offset = {
    top: 30,
    left: 30,
    right: 30,
    bottom: 30,
  };

  IMAGE_COIN = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  constructor() {
    super().loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.IMAGE_COIN);

    this.x = 1200 + Math.random() * 500;
    this.y = 250 + Math.random() * 350;
    this.imgAnimate();
  }

  imgAnimate() {
    setInterval(() => {
      this.playAnimation(this.IMAGE_COIN);
    }, 500);
  }
}
