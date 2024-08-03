class Chickensmall extends MovableObject {
  width = 50;
  height = 50;
  y = 360;
  x = 50;
  isDead = false;
  

  offset = {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  };

  IMAGE_WALKING = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGE_DEAD = ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"];
  currentImage = 0;

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGE_WALKING);
    this.loadImages(this.IMAGE_DEAD);
    this.x = 200 + Math.random() * 2500;
    this.speed = 0.15 + Math.random() * 0.15;
    this.animate();
    this.imgAnimate();
  }

  //animate the chicken than it is walk and dead
  imgAnimate() {
    setInterval(() => {
      if (!this.isDead) {
        this.playAnimation(this.IMAGE_WALKING);
      } else if (this.isDead) {
        this.playAnimation(this.IMAGE_DEAD);
        this.endPlayAnimation();
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
