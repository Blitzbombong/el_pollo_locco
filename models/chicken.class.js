class Chicken extends MovableObject {
  width = 60;
  height = 80;
  y = 345;
  speed = 10;
  isDead = false;
  chicken_sound = new Audio("audio/chiken.mp3");

  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  offset = {
    top: 70,
    left: 50,
    right: 50,
    bottom: 70,
  };

  currentImage = 0;

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImage(this.IMAGES_DEAD);
    this.x = 200 + Math.random() * 2500; // Plaziert die Chiken auf zufahlige Psition was das Math.random ausrechnet.
    this.speed = 0.15 + Math.random() * 0.25;

    this.animate();
    this.imgAnimate();
  }

  animate() {
    // Walking Left
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }

  imgAnimate() {
    setInterval(() => {
      this.chicken_sound.pause();
      if (!this.isDead) {
        this.playAnimation(this.IMAGES_WALKING);
      } else {
        this.playAnimation(this.IMAGES_DEAD);
        this.endPlayAnimation();
      }
    }, 120);
  }
}
