class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 150;
  y = 300;
  height = 100;
  width = 100;
  status = 0;
  lastHeal = 0;
  collected = false;
  hidden = true;

  // Bessere Formel zur Kollisionsberechnung (Genauer)
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  collect() {
    this.collected = true; // Mark the coin as collected
    this.collectSound.play(); // Play the collection sound
    this.hide(); // Hide the coin
  }

  healObject() {
    if (this.status < 100) {
      this.status += 20;
      if (this.status > 100) {
        this.status = 100;
      } else {
        this.lastHeal = new Date().getTime(); // Aktualisiere den Zeitstempel des letzten Heilens
      }
    }
  }

  hide() {
    this.hidden = false;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 7 % 6; => 1. Rest 1
    // i = 0, 1, 2, 3, 4, 5, , 0, 1 .... wiederhlt die Zahlen von 0 bis 5
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  // loadImage('img/test.png')
  loadImage(path) {
    this.img = new Image(); // das geleiche ist das - this.img = document.getElementById('image') <img id="image" src>
    this.img.src = path;
  }

  draw(ctx) {
    if (this.hidden) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

  /**
   *
   * @param {Array} arr - ['img/image1.png', 'img/image2.png', .... ]
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  drawFrame(ctx) {
    // Mit diesem befahl wir der Rand um Character und Chicken animiert
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss
    ) {
      // Rand um die charaktere animieren - spater muss man die wieder entfernen
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }

    // Mit dieser if abfrage werden Coins und Bottles umrandet
    if (this instanceof Coins || this instanceof SalsaBottle) {
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}
