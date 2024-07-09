class Coins extends DrawableObject {
  offset = {
    top: 30,
    left: 30,
    right: 30,
    bottom: 30,
  };
  y = 300;
  x = 2500;
  IMAGE_COIN = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  constructor() {
    super().loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.IMAGE_COIN);
    this.x = 200 + Math.random() * 2001;
    this.y = 100 + Math.random() * 200;
    this.collectSound = new Audio("audio/coin_sound.mp3");
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.collected) {
        this.playAnimation(this.IMAGE_COIN);
      }
    }, 300);
  }

 

}