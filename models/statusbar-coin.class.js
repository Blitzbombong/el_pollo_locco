class StatusBarCoin extends DrawableObject {
  IMAGES_COIN = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.x = 10;
    this.y = 40;
    this.width = 200;
    this.height = 50;
    this.setPercentage(0);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_COIN[this.resolveImageIndex()];
    this.img = this.imageCache[path];
}

  // Erhot StatusBar fur Coins und Bottles
  resolveImageIndex() {
    if (this.percentage == 0) {
        return 0;
    } else if (this.percentage < 3) {
        return 1;
    } else if (this.percentage < 6) {
        return 2;
    } else if (this.percentage < 9) {
        return 3;
    } else if (this.percentage < 10) {
        return 4;
    } else {
        return 5;
    }
}
}