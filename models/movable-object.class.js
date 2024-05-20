class MovableObject {
    x = 150;
    y = 300;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceletation = 2.5;
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
        return this.y < 200;
    }


    // loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // das geleiche ist das - this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        // Mit diesem befahl wir der Rand um Character und Chicken animiert
        if(this instanceof Character || this instanceof Chicken) {
            // Rand um die charaktere animieren - spater muss man die wieder entfernen
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    // Bessere Formel zur Kollisionsberechnung (Genauer)
    /*
    isColliding  (mo) {
        return  (this.x + this.width) >= mo.x && mo.x <= (mo.x + mo.width) && 
                (this.y + this.offsetY + this.height) >= mo.y &&
                (this.y + this.offsetY) <= (mo.y + mo.height) && 
                mo.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    }
    */
    
    isColliding (mo) {
        return  (this.x + this.width - this.offset.right) > (mo.x + mo.offset.left) &&
                (this.y + this.height - this.offset.bottom) > (mo.y + mo.offset.top) &&
                (this.x + this.offset.left) < (mo.x + mo.width - mo.offset.right) &&
                (this.y + this.offset.top) < (mo.y + mo.height - mo.offset.bottom);
    }
    /*
    isColliding (mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }
    */
    

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

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }


    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6; => 1. Rest 1
                // i = 0, 1, 2, 3, 4, 5, , 0, 1 .... wiederhlt die Zahlen von 0 bis 5
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
    }

    jump(){
        this.speedY = 30;
    } 

    
    
    
}