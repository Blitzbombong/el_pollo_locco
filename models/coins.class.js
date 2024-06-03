class Coins extends DrawableObject {
  offset = {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
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
        let i = this.currentImage % this.IMAGE_COIN.length; // let i = 7 % 6; => 1. Rest 1
        // i = 0, 1, 2, 3, 4, 5, , 0, 1 .... wiederholt die Zahlen von 0 bis 5
        let path = this.IMAGE_COIN[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 300);
  }

  collect() {
    this.collected = true; // Mark the coin as collected
    this.collectSound.play(); // Play the collection sound
    this.hide(); // Hide the coin
  }

  hide() {
    this.x = -100;
    this.y = -100;
  }
}
