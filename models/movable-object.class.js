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

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
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
            let i = this.currentImage % this.IMAGE_WALKING.length; //let i = 0, 1, 2, 3, 4 , 5, 0 
            // Wen der Array durch ist in dem Fahl nach 5 bild kommt bild 0 wieder. 
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }

    moveRight(){
        console.log('Moving right');
    }

    moveLeft(){
        setInterval( () => {
            this.x -= 0.15;
        }, 1000 / 60);
    }
}