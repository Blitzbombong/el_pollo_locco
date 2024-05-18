class Cahracter extends MovableObject  {
   width = 120;
   height = 220;
   y = 99;
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

   IMAGES_JUMPING = [
    'img/2_character_pepe/3_jump/J-31.png',
    'img/2_character_pepe/3_jump/J-32.png',
    'img/2_character_pepe/3_jump/J-33.png',
    'img/2_character_pepe/3_jump/J-34.png',
    'img/2_character_pepe/3_jump/J-35.png',
    'img/2_character_pepe/3_jump/J-36.png',
    'img/2_character_pepe/3_jump/J-37.png',
    'img/2_character_pepe/3_jump/J-38.png',
    'img/2_character_pepe/3_jump/J-39.png'
   ];
   walking_sound = new Audio('audio/running1.mp3');
   jumping_sound = new Audio('audio/jumping.mp3');

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();

        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
                this.otherDirection = false;
            }

            if (this.world.keyboard.LEFT && this.x > -600 ) {
                this.x -= this.speed;
                this.moveLeft();
                this.walking_sound.play();
                this.otherDirection = true;
            }

            if(this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jumping_sound.play();
                this.jumping_sound.volume = 0.3;
            }

            this.world.camera_x = - this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if(this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                // Animation nach Rechts oder nach Links
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //Walk animation
                this.playAnimation(this.IMAGES_WALKING);
                }
            }       
        }, 50);  
    }

    


}