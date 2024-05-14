class Cahracter extends MovableObject  {
   width = 120;
   height = 220;
   y = 209;
   speed = 10;
   world;
   IMAGES_WALKING = [
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png'
   ];
   walking_sound = new Audio('audio/running1.mp3');

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > -600 ) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = - this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            // Animation nach Rechts oder nach Links
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                //Walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6; => 1. Rest 1
                // i = 0, 1, 2, 3, 4, 5, , 0, 1 .... wiederhlt die Zahlen von 0 bis 5
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }       
        }, 50);  
    }

    jump(){

    }


}