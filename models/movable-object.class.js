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