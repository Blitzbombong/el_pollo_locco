class Character extends MovableObject {
  width = 120;
  height = 220;
  y = 99;
  speed = 10;
  world;
  

  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_DEAD = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  walking_sound = new Audio("audio/running1.mp3");
  jumping_sound = new Audio("audio/jumping.mp3");
  offset = {
    top: 120,
    left: 30,
    right: 40,
    bottom: 30,
  };

    bottleStatus = 0; // Initialisieren Sie den bottleStatus
    lastHeal = 0; // Initialisieren Sie lastHeal
    canThrowBottle = true; // Neue Variable hinzufügen

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
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

      if (this.world.keyboard.LEFT && this.x > -600) {
        this.moveLeft();
        this.walking_sound.play();
        this.otherDirection = true;
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        this.jumping_sound.play();
        this.jumping_sound.volume = 0.3;
      }

      if (this.world.keyboard.THROW && this.canThrowBottle) { // Überprüfe canThrowBottle
        this.throwBottle();
      }

      if (!this.world.keyboard.THROW) {
        this.canThrowBottle = true; // Setze die Variable zurück, wenn die Taste losgelassen wird
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      }
      // Animation nach Rechts oder nach Links
      else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //Walk animation
        this.playAnimation(this.IMAGES_WALKING);
      } else {
        // Setzt das Standbild, wenn keine Taste gedrückt wird
        this.loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
      }
    }, 50);
  }

  healBottle() {
    if (this.bottleStatus < 100) {
      this.bottleStatus += 20;
      if (this.bottleStatus > 100) {
        this.bottleStatus = 100;
      }
      this.world.statusBarBottle.collectPercentage(this.bottleStatus);
    }
  }

  throwBottle() {
    if (this.bottleStatus >= 20 && this.canThrowBottle) {
      this.bottleStatus -= 20;
      console.log(`Bottle thrown. Current bottleStatus: ${this.bottleStatus}`);
      this.world.statusBarBottle.collectPercentage(this.bottleStatus); // Aktualisieren der Statusleiste
  
      // Neue fliegende Flasche erstellen
      let bottle = new SalsaBottle();
      bottle.x = this.x;
      bottle.y = this.y;
      bottle.otherDirection = this.otherDirection; // Richtung der Flasche setzen
      bottle.throwBottle();
  
      this.world.addFlyingBottle(bottle); // Füge die fliegende Flasche der Welt hinzu
  
      this.canThrowBottle = false; // Setze die Variable auf false
      setTimeout(() => {
        this.canThrowBottle = true; // Setze die Variable nach 500ms auf true
      }, 500);
    } else {
      console.log("Not enough bottles to throw");
      this.lastHeal = new Date().getTime(); // Aktualisieren des Zeitstempels des letzten Heilens
    }
  }
}
