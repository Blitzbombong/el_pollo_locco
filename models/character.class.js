class Character extends MovableObject {
 world;
  timeOfLastMovement = 0;

  walk_sound = new Audio("audio/running1.mp3");
  jump_sound = new Audio("audio/jumping.mp3");
  died_sound = new Audio("audio/died_sound.mp3");
  sleep_sound = new Audio("audio/sleep_sound.mp3");

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

  IMAGES_IDLE = [
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_SLEEP = [
    "img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img/2_character_pepe/1_idle/long_idle/I-16.png",
    "img/2_character_pepe/1_idle/long_idle/I-17.png",
    "img/2_character_pepe/1_idle/long_idle/I-18.png",
    "img/2_character_pepe/1_idle/long_idle/I-19.png",
    "img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  offset = {
    top: 80,
    left: 20,
    right: 30,
    bottom: 10,
  };

  constructor() {
    super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
    this.x = 80;
    this.y = 180;
    this.width = 130;
    this.height = 250;
    this.speed = 5;
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SLEEP);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.applyGravity(this.y);
    this.animate();
  }

  animate() {
    setInterval(() => this.characterUnmoving(), 300);
    setInterval(() => this.characterMove(), 1000 / 60);
    setInterval(() => this.characterPlay(), 80);
  }

  characterMove() {
    this.walk_sound.pause();
    if (this.isMovingRight()) this.moveRight();
    if (this.isMovingLeft()) this.moveLeft();
    if (this.isJumping()) {
      this.currentImage = 0;
      this.jump();
    }

    this.world.camera_x = -this.x + 100;
  }

  isMovingRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }

  moveRight() {
    super.moveRight();
    this.otherDirection = false;
    this.walk_sound.play();
    this.walk_sound.volume = 0.4;
  }

  isMovingLeft() {
    return this.world.keyboard.LEFT && this.x > 0;
  }

  moveLeft() {
    super.moveLeft();
    this.otherDirection = true;
    this.walking_sound.play();
    this.walking_sound.volume = 0.4;
  }

  isJumping() {
    return this.world.keyboard.SPACE && !this.isAboveGround();
  }

  characterPlay() {
    if (this.isAboveGround()) {
      if (this.speedY > 0 && this.currentImage > 3) this.currentImage = 3;
      if (this.speedY < 0 && this.currentImage > 4) this.currentImage = 7;
      this.playAnimation(this.IMAGES_JUMPING);
    } else if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD);
    } else if (this.isHurt()) {
      this.playAnimation(this.IMAGES_HURT);
    } else {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)
        this.playAnimation(this.IMAGES_WALKING);
    }
  }

  characterUnmoving() {
    if (this.nowUnmoving()) {
      this.showUnmoving();
      if (this.isSleeping()) this.showSleeping();
    } else {
      this.sleep_sound.pause();
      this.timeOfLastMovement = 0;
    }
  }

  nowUnmoving() {
    return !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT;
  }

  showUnmoving() {
    this.timeOfLastMovement += 300;
    let i = this.currentImage % this.IMAGES_IDLE.length;
    this.playAnimation(this.IMAGES_IDLE);
  }

  isSleeping() {
    return this.timeOfLastMovement >= 12000;
  }

  showSleeping() {
    this.playAnimation(this.IMAGES_SLEEP);
    this.sleep_sound.play();
    this.sleep_sound.volume = 0.2;
    this.sleep_sound.playbackRate = 0.7;
  }
}
