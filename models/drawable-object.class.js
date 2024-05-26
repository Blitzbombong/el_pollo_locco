class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 150;
    y = 300;
    height = 100;
    width = 100;
    percentage = 100;

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
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            // Rand um die charaktere animieren - spater muss man die wieder entfernen
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        // Mit dieser if abfrage werden Coins und Bottles umrandet 
        if(this instanceof Coins || this instanceof SalsaBottle) {
          ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    //setPercentage(50)
  setPercetage(percentage) {
    this.percentage = percentage; // => 0 .... 5
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}