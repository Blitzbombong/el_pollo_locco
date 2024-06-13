class SalsaBottle extends DrawableObject {
  width = 50;
  height = 70;
  speedY = -8;
  speedX = 10; 
  gravity = 0.5;
  y = 360;
  x = 2500;
  offset = {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  };
  IMAGE_BOTTLE = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  IMAGE_THROWBOTTLE = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
  ];

  
  constructor() {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.IMAGE_BOTTLE);
    this.loadImages(this.IMAGE_THROWBOTTLE);
    this.x = 200 + Math.random() * 2101;
    this.collectSound = new Audio('audio/cllect-bottle.mp3 ');
    this.animate();
    this.thrown = false; // Markiert, ob die Flasche geworfen wurde
  }

  animate() {
    setInterval(() => {
      if (!this.collected && !this.thrown) {
        let i = this.currentImage % this.IMAGE_BOTTLE.length; // let i = 7 % 6; => 1. Rest 1
        // i = 0, 1, 2, 3, 4, 5, , 0, 1 .... wiederholt die Zahlen von 0 bis 5
        let path = this.IMAGE_BOTTLE[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 2000);
  }

  throwBottle() {
    this.thrown = true;
    this.animateThrow();
  }

  animateThrow() {
    setInterval(() => {
      if (this.thrown) {
        this.applyGravity();
        this.move();
        this.playAnimation(this.IMAGE_THROWBOTTLE);
      }
    }, 1000 / 40); // 60 fps
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  applyGravity() {
    this.y += this.speedY;
    this.speedY += this.gravity;
  }

  move() {
    this.x += this.otherDirection ? -this.speedX : this.speedX;
  }

  collect() {
    this.collected = true; // Mark the coin as collected
    this.collectSound.play(); // Play the collection sound
    this.hide(); // Hide the coin
  }

  hide() {
    this.x = -100;
    this.y = -100;
  }

  
}
