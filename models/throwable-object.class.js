class ThrowableObject extends MovableObject {
  isBottleSplash = false;
  stopToMoveBottle = false;

  IMAGE_ROTATION = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGE_SPLASH = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.loadImages(this.IMAGE_ROTATION);
    this.loadImages(this.IMAGE_SPLASH);
    this.trow();
  }

  trow() {
    this.speedY = 20;
    this.applyGravity();
    this.a

    setInterval(() => {
      if (!this.stopToMoveBottle) {
        this.x += 10;
      }
    }, 25);

    setInterval(() => {
      if (!this.isBottleSplash) {
        this.playAnimation(this.IMAGE_ROTATION);
      } else if (this.isBottleSplash) {
        this.playAnimation(this.IMAGE_SPLASH);
        this.x += 0.001;
        setTimeout(() => {
          this.isBottleSplash = false;
          this.stopToMoveBottle = true;
          this.y = 800;
        }, 1000);
      }
    }, 100);
  }
}
