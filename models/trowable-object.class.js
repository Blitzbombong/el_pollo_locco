class TrowableObject extends MovableObject {
    offset = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
    };
    IMAGE_THROWBOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
      ];


    constructor(x, y) {
        super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        this.loadImages(this.IMAGE_THROWBOTTLE);
        this.IMAGE_THROWBOTTLE();
        this.animate();
      }

      
    
      animate() {
        setInterval(() => this.throwBottle(), 100);
    }
       
    
        trow(x, y) {
          this.speedY = 30;
          this.applyGravity();
          if (world.character.otherDirection) {
              this.speedX = -10; 
          } else {
              this.speedX = 10;  
          }
  
          setInterval(() => {
              this.x += this.speedX;
          }, 25);
      }

      throwBottle() {
        let i = this.currentImage % this.IMAGE_THROWBOTTLE.length;
        this.playAnimation(this.IMAGE_THROWBOTTLE);
    }

}