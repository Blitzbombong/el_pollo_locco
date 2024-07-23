class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 150;
  y = 300;
  height = 100;
  width = 100;

  // loadImage('img/test.png')
  loadImage(path) {
    this.img = new Image(); // das geleiche ist das - this.img = document.getElementById('image') <img id="image" src>
    this.img.src = path;
  }

  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.warn("Error loading Image", e);
      console.log("Could not load Image", this.img.src);
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
      this instanceof Chickensmall ||
      this instanceof Coints ||
      this instanceof Bottle ||
      this instanceof Endboss
    ) {
      // Rand um die charaktere animieren - spater muss man die wieder entfernen
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}
