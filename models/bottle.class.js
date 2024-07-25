class Bottle extends MovableObject {
  width = 50;
  height = 80;
  world;

  offset = {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  };

  IMAGES_ROTATION = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
  ]

  constructor() {
    super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
    this.loadImages(this.IMAGES_ROTATION);

    this.x = 200 + Math.random() * 2500;
    this.y = 120 + Math.random() * 200;
  }
}
