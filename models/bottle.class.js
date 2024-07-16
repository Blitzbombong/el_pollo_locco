class Bottle extends MovableObject {
  width = 50;
  height = 70;
  world;

  offset = {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  };

  constructor() {
    super().loadImage("img/6_salsa_bottle/2_salsa_bottle_on_ground.png");

    this.x = 200 + Math.random() * 2500;
    this.y = 120 + Math.random() * 200;
  }
}
