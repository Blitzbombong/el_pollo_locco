class SalsaBottle extends MovableObject {
  width = 50;
  height = 70;
  speedY = -10;
  speedX = 12;  
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

  IMAGE_BOTTLESPLASH = [
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
  ];

  
  constructor() {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.IMAGE_BOTTLE);
    this.x = 200 + Math.random() * 2101;
    this.collectSound = new Audio('audio/cllect-bottle.mp3 ');
    this.animate();
  }

  animate() {
    setInterval(() => {
      
    }, 2000);
  }

  move() {
    this.x += this.otherDirection ? -this.speedX : this.speedX;
  }

  collect() {
    this.collected = true; // Mark the coin as collected
    this.collectSound.play(); // Play the collection sound
    this.hide(); // Hide the coin
  }

 

  
}
