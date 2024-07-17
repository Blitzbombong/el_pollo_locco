class Character extends MovableObject {
  world;
  width = 200;
  height = 190;
  x = 40;
  y = 150;
  speed = 10;

  isIdle = true;
  isIdleLong = false;
  isDeaded = false;
  isMoved = false;

  offset = {
    top: 80,
    left: 20,
    right: 30,
    bottom: 10,
  };

  dead_sound = new Audio("audio/died_sound.mp3");
  hurt_sound = new Audio("audio/hurt_sound.mp3");

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

  IMAGES_STANDING = ["./img/2_character_pepe/1_idle/idle/I-1.png"];

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

  constructor() {
    super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SLEEP);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_STANDING);
    this.applyGravity();
    this.animate();
  }

  animate() {
    //setInterval for move the character
    setInterval(() => {
      this.isMove();

      this.world.camara_x = -this.x + 100;
    }, 1000 / 60);

    //setInterval for manimation the character
    setInterval(() => {
      this.characterAninmation();
    }, 190);
  }

  //condition for move the character right
  isMoveRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isMoved;
  }

  //condition for move the character left
  isMoveLeft() {
    return this.world.keyboard.LEFT && this.x > -600;
  }

  //condition for jump the character
  isJump() {
    return this.world.keyboard.SPACE && !this.isAboveGround();
  }

  //function for move the character
  isMove() {
    if (this.isMoveRight()) {
      this.moveRight();
      this.otherDirection = false;
    }
    if (this.isMoveLeft()) {
      this.moveLeft();
      this.otherDirection = true;
    }
    if (this.isJump()) {
      this.jump();
    }
  }

  isCharacterDead() {
    this.playAnimation(this.IMAGES_DEAD);
    this.isMoved = true;
    if (soundOn) {
      this.dead_sound.play();
    }
    setTimeout(() => {
      document.getElementById("gameOver").classList.remove("d-none");
      this.isDeaded = true;
    }, 1500);
    gameAudio.pause();
  }

  //function for aninmation the character
  characterAninmation() {
    this.hurt_sound.pause();
    this.dead_sound.pause();
    if (this.isDead() && !this.isDeaded) {
      this.isCharacterDead();
      this.isMoved = true;
    } else if (this.isHurt()) {
      this.isHurtShortFunction();
    } else if (this.isAboveGround()) {
      this.isAboveGroundShortFunction();
    } else if (this.isAnimationMovingCharacter()) {
      this.isAnimationMovingCharacterShortFunction();
    } else if (this.isIdle) {
      this.playanimation(this.IMAGES_IDLE);
    }
  }

  //short function for animation then character is hurt
  isHurtShortFunction() {
    this.isIdleLong = false;
    this.isHurtAnimationCharacter();
  }

  //short function for animation then character is jump
  isAboveGroundShortFunction() {
    this.isIdleLong = false;
    this.playAnimation(this.IMAGES_JUMPING);
  }

  //short function for animation then character is move to
  isAnimationMovingCharacterShortFunction() {
    this.isIdleLong = false;
    this.playAnimation(this.IMAGES_WALKING);
  }

  //condition for aninmation the character thwn is move right
  isAnimationMovingCharacter() {
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
  }

  //function animation character then chracter ist hurt
  isHurtAnimationCharacter() {
    this.playAnimation(this.IMAGES_HURT);
    if (soundOn) {
      this.hurt_sound.play();
    }
  }
}
