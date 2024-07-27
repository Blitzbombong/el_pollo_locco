class Endboss extends MovableObject {
  width = 300;
  height = 400;
  y = 50;
  x = 3500;
  offset = {
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  };

  isAlert = false;
  isAttack = false;
  isHurt = false;
  isDead = false;

  chickenBossAlert_sound = new Audio("audio/boss_music.mp3");
  chickenBossHurt_sound = new Audio("audio/boss_hurt.mp3");
  chickenBossDead_sound = new Audio("audio/dead.mp3");

  IMAGES_WALKING = [
    'img/4_enemie_boss_chicken/1_walk/G1.png',
    'img/4_enemie_boss_chicken/1_walk/G2.png',
    'img/4_enemie_boss_chicken/1_walk/G3.png',
    'img/4_enemie_boss_chicken/1_walk/G4.png'
  ];

  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  IMAGES_ATTACK = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_ALERT = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[1]);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_ATTACK);
    this.endBossAlert();
    this.endBossAttack();
    this.endBossHurt();
    this.endbossDead();
  }

  endBossAlert() {
    this.chickenBossAlert_sound.pause();
    setInterval(() => {
      const otherObject = world.character;
      const distance = Math.abs(this.x - otherObject.x);

      if (distance < 400 && !this.isAlert) {
        this.playAnimation(this.IMAGES_ALERT);
        if (soundOn) {
          this.chickenBossAlert_sound.play();
        }
      }
    }, 200);
  }

  endBossAttack() {
    setInterval(() => {
      const otherObject = world.character;
      const distance = Math.abs(this.x - otherObject.x);
      if (distance < 400 && !this.isAttack) {
        this.playAnimation(this.IMAGES_ATTACK);
        this.x -= 10;
      }
    }, 200);
  }

  endBossHurt() {
    this.chickenBossHurt_sound.pause();
    setInterval(() => {
      if (this.isDead) {
        this.playAnimation(this.IMAGES_DEAD);
        this.x -= 0.01;
        this.isHurt = false;
        this.isDead = false;
        this.endAnimation();
      }
    }, 200);
  }

  endbossDead() {
    this.chickenBossDead_sound.pause();
    setInterval(() => {
        if (this.isDead) {
            this.playanimation(this.imagesDead);
            this.x -= 0.01;
            this.isHurt = false;
            this.isDead = false;
            this.endAnimation();
        }
    }, 200);
}

  endAnimation() {
    if (soundOn) {
      this.chickenBossDead_sound.play();
    }
    setTimeout(() => {
      document.getElementById("gameOver").classList.remove("d-none");
      gameAudio.pause();
    }, 3000);
  }
}
