class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround(){
        return this.y < 180;
    }


    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){

        if(this instanceof Character || this instanceof Chicken){
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
    
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    /*
    isColliding (obj) {
        return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) &&
                (this.y + this.offsety + this.height) >= obj.y &&
                (this.y + this.offsety) <= (obj.height) &&
                obj.onCollisionCourse;
    }
    */

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in mili second
        timepassed = timepassed / 1000; // Difference in second
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', 'img/image3.png',......] 
     */
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    playAnimation(images){
            let i = this.currentImage % images.length; //let i = 0, 1, 2, 3, 4 , 5, 0 
            // Wen der Array durch ist in dem Fahl nach 5 bild kommt bild 0 wieder. 
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }

    moveRight(){
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    jump(){
        this.speedY = 30;
    }
}