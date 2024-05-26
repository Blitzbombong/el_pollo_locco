class StatusBarHealt extends DrawableObject {
  
  IMAGES_HEALTH = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png", // 0
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png", // 5
  ];

  constructor() {
    super().loadImage(this.IMAGES_HEALTH[0]);
    this.loadImages(this.IMAGES_HEALTH);
    this.width = 200;
    this.height = 50;
    this.x = 10;
    this.y = 0;
    this.setPercetage(100);
  }
}
