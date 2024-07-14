class MovableObject extends DrawableObject {
  speed = 0.15;
  acceleration = 1.5;
  otherDirection = false;
  speedY = 0;
  energy = 100;
  energyEndBoss = 100;
  statusBottles = 0;
  statusCoins = 0;
  lastHit = 0;

  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  // Gravitation lasst gegenstande runter fahlen
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      } else {
        this.speedY = 0;
      }
    }, 1000 / 25);
  }

  // Pruft ob das Object auf dem Boden ist
  isAboveGround() {
    if (this instanceof ThowableObject) {
      return this.y < 402;
    } else {
      return this.y < 202;
    }
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 7 % 6; => 1. Rest 1
    // i = 0, 1, 2, 3, 4, 5, , 0, 1 .... wiederhlt die Zahlen von 0 bis 5
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  // Bessere Formel zur Kollisionsberechnung (Genauer)
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  // Character energy konttrolle
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  hitEndboss() {
    this.energyEndboss -= 1.7;
    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  touchCoints() {
    this.statusCoins += 20;
    if (this.statusCoins > 100) {
      this.statusCoins = 100;
    }
  }

  touchBottle() {
    this.statusBottles += 20;
    if (this.statusBottles > 100) {
      this.statusBottles = 100;
    }
  }

  throwBottle() {
    this.statusBottles -= 20;
    if (this.statusBottles < 0) {
      this.statusBottles = 0;
    }
  }

  endPlayAnimation() {
    if (soundOn) {
      this.chicken_sound.play();
    }
    this.y = 410;
    this.speed = 0;
    setTimeout(() => {
      this.width = 0;
      this.height = 0;
      this.y = 900;
    }, 500);
    setTimeout(() => {
      this.isDead = false;
    }, 800);
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Differenz in mili Secunden
    timepassed = timepassed / 1000; // Differenz in Sekunden
    return timepassed < 0.5;
  }

  isDead() {
    return this.energy == 0;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 20;
  }
}
