class World {
  character = new Character();
  statusBarHealt = new StatusBarHealt();
  statusBarCoin = new StatusBarCoin();
  statusBarBottle = new StatusBarBottle();
  endboss = new Endboss();
  enemies = level1.enemies;
  clouds = level1.clouds;
  salsaBottles = level1.salsaBottles;
  coins = level1.coins;
  backgroundObject = level1.backgroundObject;
  trowableObject = [];
  coinStatus = 0;
  bottleStatus = 0;
  lastHeal = 0;
  collected = false;
  hidden = true;

  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  setWorld() {
    this.character.world = this;
  }

  checkCollisions() {
   setInterval(() => {
    this.checkCollisionEnemies();
    this.checkTrowableObjects()
    this.checkCollisionsCoins();
    this.checkCollisionsSalsaBottles();
   }, 100);
  }

  checkTrowableObjects() {
    if (this.keyboard.THROW) {
      console.log("throwing");
      let bottle = new TrowableObject(this.character.x + 80, this.character.y + 80);
      this.trowableObject.push(bottle);
    }
  }

  // Pruft Kolisionen Character || Chiken
  checkCollisionEnemies() {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.hit();
          this.statusBarHealt.setPercetage(this.character.energy);
        }
      });
  }

  /* console.log('Collision with Character, energy', this.character.energy); */
  

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the Canvas.

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObject);
    this.addObjectsToMap(this.level.clouds);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarHealt);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarBottle);

    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.salsaBottle);
    this.addObjectsToMap(this.trowableObject);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.level.enemies);

    this.ctx.translate(-this.camera_x, 0);

    // Draw wird immer wieder neu aufgerufen, so viel wie die Graphik Karte her gibt ... 30 mal pro sekunde.
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    // Bild Spiegeln
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    // Function ist in MovableObject devieniert
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    // Bild wieder zuruck setzen
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}