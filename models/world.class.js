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
  checkCollisionsCoins() {
      this.level.coins.forEach((coin) => {
        if (!coin.collected && this.character.isColliding(coin)) {
          if (this.character.coinStatus < 100) {
            // Überprüfen, ob die Statusleiste voll ist
            coin.collect(); // Markiere die Flasche als gesammelt und verstecke sie
            this.character.healCoins(); // Erhöhe den StatusBarSalsaBottle
            this.statusBarCoin.collectPercetage(this.character.coinStatus);
            /*console.log(
              "Collision with Character, energetic",
              this.character.coinStatus
            );*/
          } else {
            /*console.log("StatusBar is full, cannot collect more coins");*/
          }
         }
      });
  }

  checkCollisionsSalsaBottles() {
      this.level.salsaBottle.forEach((bottle) => {
        if (!bottle.collected && this.character.isColliding(bottle)) {
          if (this.character.bottleStatus < 100) {
            // Überprüfen, ob die Statusleiste voll ist
            bottle.collect(); // Markiere die Flasche als gesammelt und verstecke sie
            this.character.healBottle(); // Erhöhe den StatusBarSalsaBottle
            this.statusBarBottle.collectPercentage(this.character.bottleStatus);
            /*console.log('Collision with Character, energetic', this.character.bottleStatus);*/
          } else {
            /*console.log('StatusBar is full, cannot collect more bottles');*/
          }
        }
      });
  }

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