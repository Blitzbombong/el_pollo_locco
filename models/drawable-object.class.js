class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 150;
  y = 300;
  height = 100;
  width = 100;
  energetic = 0;
  collected = false;

  heal() {
    // Erhöht die Energie des Objekts um 5.
    this.energetic += 20;

    // Überprüft, ob die Energie größer als 100 ist.
    if (this.energetic > 100) {
      // Setzt die Energie auf 100, wenn sie über 100 steigt.
      this.energetic = 100;
    } else {
      // Wenn die Energie 100 nicht überschreitet,
      // wird die Zeit des letzten Heilens gespeichert.
      this.lastHeal = new Date().getTime();
    }
  }


  // loadImage('img/test.png')
  loadImage(path) {
    this.img = new Image(); // das geleiche ist das - this.img = document.getElementById('image') <img id="image" src>
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
