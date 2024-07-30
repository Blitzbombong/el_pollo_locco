class StatusBarHealt extends DrawableObject {
  IMAGES_HEALTH = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png", // 0
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png", // 5
  ];

  percentage = 100;

  constructor() {
    super().loadImage(this.IMAGES_HEALTH[0]);
    this.loadImages(this.IMAGES_HEALTH);
    this.width = 200;
    this.height = 50;
    this.x = 10; 
    this.y = 0;
    this.setPercet(100);
  }

  setPercet(percent) {
    this.percent = percent; // => 0 .... 5
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
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