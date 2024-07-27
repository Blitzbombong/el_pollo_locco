class World {

  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  
  statusBarHealt = new StatusBarHealt();
  statusBarCoints = new StatusBarCoints();
  statusBarBottle = new StatusBarBottle();
  statusBarEndboss = new StatusBarEndboss();

  endboss = new Endboss();
  
  bottle = [new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle()];
  coints = [new Coints(), new Coints(), new Coints(), new Coints(), new Coints(), new Coints(), new Coints(), new Coints()];

  throwableObjects = [];
  bottles;
  hitCount = 0;

  coin_sound = new Audio("audio/coin.mp3");
  bottle_sound = new Audio("audio/bottle.mp3");

  
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  run() {
    setInterval(() => {
      this.collisionsBottleFlor();
      this.checkCollisionsBottleChicken();
      this.checkCollisionsBottleEndboss();
      this.checkCollisionsEnemie();
      this.checkCollisionsBottle();
      this.checkCollisionsCoints();
      this.checkCollisionsEndboss();
      this.checkThrowableObjects();
    }, 100);
  }

  checkThrowableObjects() {
    if (this.character.crowdBottle > 0) {
      if (this.keyboard.S && (!this.latstThrowTime || Date.now() - this.latstThrowTime > 500)) {
        console.log("Keyboard THROW is true and time since last throw is greater than 500ms");
        let bottles = new ThrowableObject(this.character.x + 20, this.character.y + 20);
        this.throwableObjects.push(bottles);
        this.character.throwBottle();
        this.statusBarBottle.setPercentageBottle(this.character.crowdBottle);
        this.latstThrowTime = Date.now();
      }
    }
  }


  checkCollisionsEnemie() {
    this.level.enemies.forEach((enemy) => {
      if (!enemy.isDead && this.character.isColliding(enemy)) {
        if (this.character.y + this.character.height > enemy.y
           && this.character.isAboveGround() 
           && this.character.isHurt() 
           && this.character.speedY < 0) {
          enemy.isDead = true;
        } else {
          this.character.hit();
          this.statusBarHealt.setPercetage(this.character.energy);
        }
      }
    });
  }



  checkCollisionsBottleChicken() {
    this.level.enemies.forEach((enemy) => {
      this.throwableObjects.forEach((bottle) => {
        if (bottle.isColliding(enemy)) {
          enemy.isDead = true;
          bottle.isBottleSplash = true;
          bottle.stopToMoveBottle = true;
        }
      });
    });
  }



  collisionsBottleFlor() {
    this.throwableObjects.forEach((bottle) => {
      setTimeout(() => {
        bottle.isBottleSplash = true;
        bottle.stopToMoveBottle = true;
      }, 1200);
    });
  }
  


  checkCollisionsBottleEndboss() {
    this.throwableObjects.forEach((bottle) => {
      if (bottle.isColliding(this.endboss)) {
        bottle.isBottleSplash = true;
        bottle.stopToMoveBottle = true;
        this.hitInformationEnboss();
        if (this.hitCount >= 25) {
          this.endboss.isHurt = true;
        }
        if (this.hitCount >= 45) {
          this.endboss.isDead = true;
        }
      }
    });
  }



  hitInformationEnboss() {
    this.hitCount++;
    this.character.hitEndboss();
    this.statusBarEndboss.setPercentageEndboss(this.character.energyEndboss);
  }



  checkCollisionsEndboss() {
    if (this.character.isColliding(this.endboss)) {
      this.character.hit();
      this.statusBarHealt.setPercentage(this.character.energy);
    }
  }



  checkCollisionsBottle() {
    this.bottle_sound.pause();
    this.bottle.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.character.touchBottle();
        this.statusBarBottle.setPercentageBottle(this.character.crowdBottles);
        console.log(this.character.crowdBottles);
        this.ctx.clearRect(bottle.x, bottle.y, bottle.width, bottle.height);
        this.bottle.splice(index, 1);
        if (soundOn) {
          this.bottle_sound.play();
        }
      }
    });
  }

  checkCollisionsCoints() {
    this.coin_sound.pause();
    this.coints.forEach((coints, index) => {
      if (this.character.isColliding(coints)) {
        this.character.touchCoints();
        this.statusBarCoints.setPercentageCoints(this.character.crowdCionts);
        this.ctx.clearRect(coints.x, coints.y, coints.width, coints.height);
        this.coints.splice(index, 1);
        if (soundOn) {
          this.coin_sound.play();
        }
      }
    });
  }

  setWorld() {
    this.character.world = this;
    this.endboss.world = this;
    this.statusBarEndboss.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the Canvas.

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgrounds);
    this.addObjectsToMap(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0);

    this.addToMap(this.statusBarHealt);
    this.addToMap(this.statusBarCoints);
    this.addToMap(this.statusBarBottle);
    

    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);

    this.addObjectsToMap(this.coints);
    this.addObjectsToMap(this.bottle);
    this.addToMap(this.endboss);
    this.addToMap(this.statusBarEndboss);
    this.addObjectsToMap(this.throwableObjects);
    

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
