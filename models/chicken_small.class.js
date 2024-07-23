class Chickensmall extends MovableObject {
  width = 50;
  height = 50;
  y = 403;
  x = 50;
  isDead = false;
  chicken_sound = new Audio("audio/chiken.mp3");

  offset = {
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  };

  IMAGE_WALKING = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGWE_DEAD = ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"];
  currentImage = 0;

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGE_WALKING);
    this.loadImages(this.IMAGWE_DEAD);
    this.x = 200 + Math.random() * 2500;
    this.speed = 0.15 + Math.random() * 0.15;
    this.animate();
    this.imgAnimate();
  }

  //animate the chicken than it is walk and dead
  imgAnimate() {
    this.chicken_sound.pause();
    setInterval(() => {
      if (!this.isDead) {
        this.playAnimation(this.IMAGE_WALKING);
      } else if (this.isDead) {
        this.playAnimation(this.IMAGWE_DEAD);
        this.endPlayanimation();
      }
    }, 100);
  }

  // animate the chicken move to left
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
