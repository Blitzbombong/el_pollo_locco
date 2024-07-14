class SmallChicken extends MovableObject {
  width = 60;
  height = 80;
  y = 345;
  speed = 10;
  isDead = false;
  chicken_sound = new Audio("audio/chiken.mp3");

  ofoffset = {
    top: 30,
    left: 30,
    right: 30,
    bottom: 30,
  };

  IMAGES_WALKING = [
    "img/3_enemies_small/chicken_small/1_walk/1_w.png",
    "img/3_enemies_small/chicken_small/1_walk/2_w.png",
    "img/3_enemies_small/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["img/3_enemies_small/chicken_small/2_dead/dead.png"];
  currentImage = 0;

  constructor() {
    super().loadImage("img/3_enemies_small/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImage(this.IMAGES_DEAD);
    this.x = 200 + Math.random() * 2500; // Plaziert die Chiken auf zufahlige Psition was das Math.random ausrechnet.
    this.speed = 0.15 + Math.random() * 0.25;

    this.animate();
    this.imgAnimate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }

  imgAnimate() {
    this.chicken_sound.pause();
    setInterval(() => {
      if (!this.isDead) {
        this.playanimation(this.imagesWalking);
      } else if (this.isDead) {
        this.playanimation(this.imageChickenDead);
        this.endPlayanimation();
      }
    }, 100);
  }
}
