class Coins extends DrawableObject {
  offset = {
    top: 30,
    left: 30,
    right: 30,
    bottom: 30,
  };
  
  IMAGE_COIN = [
    "img/8_coin/coin_1.png", 
    "img/8_coin/coin_2.png"
  ];

  constructor(x, y, height, width) {
    super().loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.IMAGE_COIN);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.collectSound = new Audio("audio/coin_sound.mp3");
    this.animate();
  }

  animate() {
    setInterval(() => this.collectCoin(), 650);
}


collectCoin() {
  let i = this.currentImage % this.IMAGES_COIN.length;
  this.playAnimation(this.IMAGE_COIN);
}
 

}