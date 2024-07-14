class StatusBarEndboss extends DrawableObject {
  IMAGES_ENDBOSS = [
    "img/7_statusbars/2_statusbar_endboss/blue/blue0.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue20.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue40.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue60.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue80.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue100.png",
  ];
  percentage = 100;
  constructor() {
    super();
    this.loadImages(this.IMAGES_ENDBOSS);
    this.width = 200;
    this.height = 70;
    this.x = 3500;
    this.y = 30;
    setPercentageEndboss(100);
  }

  moveEndbossStatusBar() {
    setInterval(() => {
      const distance = world.endboss.x + 50;
      this.x -= distance;
    }, 1000 / 60);
  }

  setPercentageEndboss(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_ENDBOSS[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percent == 100) {
      return 5;
    } else if (this.percent > 80) {
      return 4;
    } else if (this.percent > 60) {
      return 3;
    } else if (this.percent > 40) {
      return 2;
    } else if (this.percent > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
