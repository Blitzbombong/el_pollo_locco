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
    super().loadImage(this.IMAGES_COIN[0]);
    this.loadImages(this.IMAGES_COIN);
    this.x = 10;
    this.y = 40;
    this.width = 200;
    this.height = 50;
    this.collectPercetage(0);
  }

  collectPercetage(percentajes) {
    this.percentajes = percentajes; // => 0 .... 5
    let path = this.IMAGES_COIN[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentajes == 0) {
      return 0;
    } else if (this.percentajes <= 20) {
      return 1;
    } else if (this.percentajes <= 40) {
      return 2;
    } else if (this.percentajes <= 60) {
      return 3;
    } else if (this.percentajes <= 80) {
      return 4;
    } else if (this.percentajes <= 100) {
      return 5;
    }
  }
}
