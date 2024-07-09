class StatusBarBottle extends DrawableObject {

  IMAGES_BOTTLE = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_BOTTLE[0]);
    this.loadImages(this.IMAGES_BOTTLE);
    this.x = 10;
    this.y = 80;
    this.width = 200;
    this.height = 50;
    this.bottleStatus = 0;
    this.collectPercentage(0);
  }

  collectPercentage(bottleStatus) {
    this.bottleStatus = bottleStatus;
    let path = this.IMAGES_BOTTLE[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.bottleStatus == 0) {
      return 0;
    } else if (this.bottleStatus <= 20) {
      return 1;
    } else if (this.bottleStatus <= 40) {
      return 2;
    } else if (this.bottleStatus <= 60) {
      return 3;
    } else if (this.bottleStatus <= 80) {
      return 4;
    } else if (this.bottleStatus <= 100) {
      return 5;
    }
  }
}