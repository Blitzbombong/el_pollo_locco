class SalsaBottle extends DrawableObject {
  width = 50;
  height = 70; 
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

  

  
  constructor() {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.IMAGE_BOTTLE);
    this.x = 200 + Math.random() * 2101;
    this.collectSound = new Audio("audio/cllect-bottle.mp3");
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGE_BOTTLE);
    }, 200);
  }
}