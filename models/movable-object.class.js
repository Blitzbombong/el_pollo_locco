class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceletation = 2.5;
  energy = 100;
  hidden = true;
  offset = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
  }; // Standardwert für offset


  // Gravitation lasst gegenstande runter fahlen
  applyGravity(){
      setInterval(() => {
          if (this.isAboveGround() || this.speedY > 0){
              this.y -= this.speedY;
              this.speedY -= this.acceletation;
          }
      }, 1000 / 25);
  }
  
  // Pruft ob das Object auf dem Boden ist
  isAboveGround() {
      if (this instanceof TrowableObject) {
          return true;
      } else { 
          return this.y < 200;
      }
  }


  // Bessere Formel zur Kollisionsberechnung (Genauer)
  isColliding (mo) {
      return  (this.x + this.width - this.offset.right) > (mo.x + mo.offset.left) &&
              (this.y + this.height - this.offset.bottom) > (mo.y + mo.offset.top) &&
              (this.x + this.offset.left) < (mo.x + mo.width - mo.offset.right) &&
              (this.y + this.offset.top) < (mo.y + mo.height - mo.offset.bottom);
  }


  // Character energy konttrolle
  hit() {
      this.energy -= 5;
      if(this.energy < 0){
          this.energy = 0;
      } else {
          this.lastHit = new Date().getTime();
      }
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


  playAnimation(images) {
      let i = this.currentImage % images.length; // let i = 7 % 6; => 1. Rest 1
              // i = 0, 1, 2, 3, 4, 5, , 0, 1 .... wiederhlt die Zahlen von 0 bis 5
              let path = images[i];
              this.img = this.imageCache[path];
              this.currentImage++;
  }

  jump(){
      this.speedY = 30;
  }   
  
  hide() {
      this.hidden = false;
    }
}