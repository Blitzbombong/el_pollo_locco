class StatusBarBottle extends DrawableObject {
  percentage = 0;

  IMAGES_BOOTLE = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_BOOTLE[0]);
    this.loadImages(this.IMAGES_BOOTLE);
    this.x = 10;
    this.y = 80;
    this.width = 200;
    this.height = 50;
    this.setPercetage(0);
  }

  setPercetage(percentage) {
    this.percentage = percentage; // => 0 .... 5
    let path = this.IMAGES_BOOTLE[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage >= 0 && this.percentage <= 20) {
      return 0;
    } else if (this.percentage > 20 && this.percentage <= 40) {
      return 1;
    } else if (this.percentage > 40 && this.percentage <= 60) {
      return 2;
    } else if (this.percentage > 60 && this.percentage <= 80) {
      return 3;
    } else if (this.percentage > 80 && this.percentage < 100) {
      return 4;
    } else if (this.percentage == 100) {
      return 5;
    }
  }
}
