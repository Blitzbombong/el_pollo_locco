class Bottle extends MovableObject {
  width = 50;
  height = 80;
  world;

  y = 340;

  offset = {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  };

  IMAGES_GROUND = [
    'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
  ]

  constructor() {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");

    this.x = 190 + Math.random() * 2500;
    
  }
}
